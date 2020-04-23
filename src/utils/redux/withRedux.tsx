import React from 'react';
import { Store } from '@reduxjs/toolkit';
import { NextPageContext, NextComponentType } from 'next';
import { AppContext } from 'next/app';

export interface WithReduxConfig {
  serializeState: (state: any) => any;
  deserializeState: (serializedState: any) => any;
  storeKey: string;
  isServerSideRendering: boolean;
}

export const defaultConfig: WithReduxConfig = {
  storeKey: '__NEXT_REDUX_STORE__',
  serializeState: (state) => state,
  deserializeState: (state) => state,
  isServerSideRendering: true,
};

export interface StoreProps<S = any> {
  store: Store<S>;
}

export interface WithStorePageContext<S = any>
  extends NextPageContext,
    StoreProps<S> {
  isServer: boolean;
}

export interface WithStoreAppContext<S = any> extends AppContext {
  ctx: WithStorePageContext<S>;
}

export interface MakeStoreArg<S = any>
  extends Partial<WithReduxConfig>,
    Partial<WithStorePageContext<S>> {
  preloadedState?: Partial<S>;
}

export type MakeStore<S = any> = (arg: MakeStoreArg<S>) => Store<S>;

export interface InitStoreOptions<S = Store> {
  seriralizedState?: any;
  config?: Partial<WithReduxConfig>;
  ctx?: WithStorePageContext<S>;
  makeStore: MakeStore<S>;
}

export interface WithReduxWrappedAppProps {
  initialProps: any; // stuff returned from getInitialProps
  initialState: any; // stuff in the Store state after getInitialProps
}

function getIsServer(): boolean {
  return typeof window === 'undefined';
}

function serveStore<S>({
  seriralizedState,
  config,
  ctx,
  makeStore,
}: InitStoreOptions<S>) {
  const { deserializeState, storeKey } = { ...defaultConfig, ...config };

  const createStore = () =>
    makeStore({
      preloadedState: deserializeState(seriralizedState),
      ...ctx,
      ...config,
    });

  // always create store if server
  if (getIsServer()) return createStore();

  // reuse store if client
  (window as any)[storeKey] = (window as any)[storeKey] || createStore();

  return (window as any)[storeKey];
}

function withRedux<S = Store>({
  makeStore,
  ...opitonalConfig
}: {
  makeStore: MakeStore<S>;
} & Partial<WithReduxConfig>) {
  const config: WithReduxConfig = {
    ...defaultConfig,
    ...opitonalConfig,
  };

  return (App: NextComponentType<WithStoreAppContext<S>, any, any>) => {
    const WrappedApp: NextComponentType<
      WithStoreAppContext<S>,
      WithReduxWrappedAppProps,
      WithReduxWrappedAppProps
    > = ({ initialProps, initialState, ...props }) => {
      const store = serveStore({
        seriralizedState: initialState,
        config,
        makeStore,
      });

      // eslint-disable-next-line react/jsx-props-no-spreading
      return <App {...props} {...initialProps} store={store} />;
    };

    if (config.isServerSideRendering || App.getInitialProps) {
      WrappedApp.getInitialProps = async (appCtx) => {
        const store = serveStore({ ctx: appCtx.ctx, makeStore });

        // eslint-disable-next-line no-param-reassign
        appCtx.ctx.store = store;

        const initialProps =
          typeof App.getInitialProps === 'function'
            ? await App.getInitialProps.call(App, appCtx)
            : {};

        return {
          initialProps,
          initialState: config.serializeState(store.getState()),
        };
      };
    }

    return WrappedApp;
  };
}

export default withRedux;
