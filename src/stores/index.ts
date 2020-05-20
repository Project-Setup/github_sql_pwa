import { MakeStoreArg } from 'utils/redux/withRedux';
import configureStore from 'utils/redux/configureStore';
import { commonReducer } from 'reducers/reducerCombo';

const makeStore = ({ preloadedState }: MakeStoreArg<any>) => {
  return configureStore({
    reducer: commonReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
};

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export default makeStore;
