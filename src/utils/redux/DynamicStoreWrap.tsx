import React, { PropsWithChildren, FC, useState, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import { ReducerEnhancedStore } from './configureStore';

export type CallbackOnStore = (store: ReducerEnhancedStore) => Promise<void>;

type DynamicStoreWrapProps = PropsWithChildren<{
  callbackOnMount?: CallbackOnStore;
  callbackOnUnmount?: CallbackOnStore;
}>;

interface DynamicStoreProps extends DynamicStoreWrapProps {
  store: ReducerEnhancedStore;
}

const DynamicStore: FC<DynamicStoreProps> = ({
  store,
  callbackOnMount,
  callbackOnUnmount,
  children,
}) => {
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    const asyncInitiate = async () => {
      if (callbackOnMount) {
        await callbackOnMount(store);
      }
      setReadyToRender(true);
    };

    const asyncEnd = async () => {
      setReadyToRender(false);
      if (callbackOnUnmount) {
        callbackOnUnmount(store);
      }
    };

    asyncInitiate();

    return () => {
      asyncEnd();
    };
  }, []);

  return readyToRender ? <>{children}</> : null;
};

const DynamicStoreWrap: FC<DynamicStoreWrapProps> = (props) => (
  <ReactReduxContext.Consumer>
    {({ store }: { store: unknown }) => {
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <DynamicStore {...props} store={store as ReducerEnhancedStore} />
      );
    }}
  </ReactReduxContext.Consumer>
);

export default DynamicStoreWrap;
