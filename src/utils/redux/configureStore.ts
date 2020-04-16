import {
  configureStore,
  combineReducers,
  ConfigureStoreOptions,
  ReducersMapObject,
  Reducer,
  Store,
  Action,
  Middleware,
  AnyAction,
} from '@reduxjs/toolkit';
import objectAssign from '../common/objectAssign';

interface StoreReducerEnhanced<S = any, A extends Action<any> = AnyAction> {
  commonReducer: ReducersMapObject<S, A>;
  asyncReducer: ReducersMapObject<any, AnyAction>;
  addReducer: <S = any, A extends Action<any> = AnyAction>(
    key: string,
    addedReducer: Reducer<S, A>
  ) => void;
  removeReducers: (keys: string[]) => void;
  injectReducers: <S = any, A extends Action<any> = AnyAction>(
    reducers: ReducersMapObject<S, A>
  ) => void;
  substitueReducers: <S = any, A extends Action<any> = AnyAction>(
    reducers: ReducersMapObject<S, A>
  ) => void;
}

export interface ReducerEnhancedStore<
  S = any,
  A extends Action<any> = AnyAction
> extends Store<S, A>, StoreReducerEnhanced<S, A> {}

export interface ModifiedConfigureStoreOptions<
  S = any,
  A extends Action<any> = AnyAction,
  M extends ReadonlyArray<Middleware<{}, S>> = ReadonlyArray<Middleware<{}, S>>
> extends ConfigureStoreOptions<S, A, M> {
  reducer: ReducersMapObject<S, A>;
}

const modifiedConfigureStore = <S = any, A extends Action<any> = AnyAction>({
  reducer,
  ...restConfig
}: ModifiedConfigureStoreOptions<S, A>) => {
  let keysToRemove: string[] = [];

  const commonReducer = reducer;

  const createReducer = <
    S extends object = {},
    A extends Action<any> = AnyAction
  >(
    reducerObj?: ReducersMapObject<S, A>
  ): Reducer<S, A> => (state = {} as S, action) => {
    let updatedState = state;
    if (keysToRemove.length > 0) {
      updatedState = objectAssign(([k]) => !keysToRemove.includes(k))(
        {},
        state
      );
      keysToRemove = [];
    }
    return combineReducers<S, A>({
      ...commonReducer,
      ...reducerObj,
    })(updatedState, action);
  };

  const store: ReducerEnhancedStore<S, A> = Object.assign(
    configureStore({ reducer, ...restConfig }),
    {
      commonReducer,
      asyncReducer: {},

      addReducer: (key, addedReducer) => {
        if (!key || store.asyncReducer[key]) {
          return;
        }
        store.asyncReducer[key] = addedReducer as Reducer<any, AnyAction>;
        store.replaceReducer(combineReducers(store.asyncReducer));
      },

      removeReducers: (keys) => {
        keys.forEach((key) => {
          if (!key || !store.asyncReducer[key]) {
            return;
          }
          keysToRemove.push(key);
        });
        store.asyncReducer = objectAssign(([k]) => !keysToRemove.includes(k))(
          {},
          store.asyncReducer
        );
        store.replaceReducer(createReducer(store.asyncReducer));
      },

      injectReducers: (reducers) => {
        objectAssign()(store.asyncReducer, reducers);
        store.replaceReducer(createReducer(store.asyncReducer));
      },

      substitueReducers: (reducers) => {
        keysToRemove.push(
          ...Object.keys(store.asyncReducer).filter((k) => !(k in reducers))
        );
        store.asyncReducer = objectAssign()({}, reducers);
        store.replaceReducer(createReducer(store.asyncReducer));
      },
    } as StoreReducerEnhanced<S, A>
  );

  return store;
};

export default modifiedConfigureStore;
