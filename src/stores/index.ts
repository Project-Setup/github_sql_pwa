import { MakeStoreArg } from '../utils/redux/withRedux';
import configureStore from '../utils/redux/configureStore';
import commonReducer from '../reducers';

const makeStore = ({ preloadedState }: MakeStoreArg<any>) => {
  return configureStore({
    reducer: commonReducer,
    devTools: process.env.ENV !== 'production',
    preloadedState,
  });
};

export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export default makeStore;
