import { configureStore } from '@reduxjs/toolkit';
import { MakeStoreArg } from '../utils/redux/withRedux';
import rootReducer from '../reducers';

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = ({ preloadedState }: MakeStoreArg<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.ENV !== 'production',
    preloadedState,
  });
};

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export default makeStore;
