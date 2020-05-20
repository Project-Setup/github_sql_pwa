import { MakeStoreArg } from 'utils/redux/withRedux';
import configureStore from 'utils/redux/configureStore';
import { commonReducer } from 'reducers/reducerCombo';

console.log(process.env.NODE_ENV);

const makeStore = ({ preloadedState }: MakeStoreArg<any>) => {
  return configureStore({
    reducer: commonReducer,
    devTools: process.env.ENV !== 'production',
    preloadedState,
  });
};

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export default makeStore;
