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

interface StoreReducerEnhanced {
  reducer: ReducersMapObject;
  addReducer: <S = any, A extends Action<any> = AnyAction>(
    key: string,
    addedReducer: Reducer<S, A>
  ) => void;
  removeReducers: (keys: string[]) => void;
  injectReducers: <S = any, A extends Action<any> = AnyAction>(
    reducers: ReducersMapObject<S, A>
  ) => void;
  substituteReducers: <S = any, A extends Action<any> = AnyAction>(
    reducers: ReducersMapObject<S, A>
  ) => void;
}

export interface ReducerEnhancedStore<
  S = any,
  A extends Action<any> = AnyAction
> extends Store<S, A>, StoreReducerEnhanced {}

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

  const createReducer = <
    S extends object = {},
    A extends Action<any> = AnyAction
  >(
    reducerObj: ReducersMapObject<S, A>
  ): Reducer<S, A> => (state = {} as S, action) => {
    let updatedState = state;
    if (keysToRemove.length > 0) {
      updatedState = objectAssign(([k]) => !keysToRemove.includes(k))(
        {},
        state
      );
      keysToRemove = [];
    }
    return combineReducers<S, A>(reducerObj)(updatedState, action);
  };

  const store: ReducerEnhancedStore<S, A> = Object.assign(
    configureStore({ reducer, ...restConfig }),
    {
      reducer,

      addReducer: (key, addedReducer) => {
        if (!key || store.reducer[key]) {
          return;
        }
        store.reducer[key] = addedReducer as Reducer<any, AnyAction>;
        store.replaceReducer(createReducer(store.reducer));
      },

      removeReducers: (keys) => {
        keys.forEach((key) => {
          if (!key || !store.reducer[key]) {
            return;
          }
          keysToRemove.push(key);
        });
        store.reducer = objectAssign(([k]) => !keysToRemove.includes(k))(
          {},
          store.reducer
        );
        store.replaceReducer(createReducer(store.reducer));
      },

      injectReducers: (reducers) => {
        objectAssign()(store.reducer, reducers);
        store.replaceReducer(createReducer(store.reducer));
      },

      substituteReducers: (reducers) => {
        keysToRemove.push(
          ...Object.keys(store.reducer).filter((k) => !(k in reducers))
        );
        store.reducer = objectAssign()({}, reducers);
        store.replaceReducer(createReducer(store.reducer));
      },
    } as StoreReducerEnhanced
  );

  return store;
};

export default modifiedConfigureStore;
