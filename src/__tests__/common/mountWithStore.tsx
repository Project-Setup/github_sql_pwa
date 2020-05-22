import React, { ReactChild } from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore, {
  ModifiedConfigureStoreOptions,
} from 'utils/redux/configureStore';

const mountWithStore = (children: ReactChild) => ({
  reducer = {},
  devTools = false,
  middleware,
  preloadedState,
  enhancers,
}: ModifiedConfigureStoreOptions = {}) => {
  const store = configureStore({
    reducer,
    devTools,
    middleware,
    preloadedState,
    enhancers,
  });
  return mount(<Provider store={store}>{children}</Provider>);
};

export default mountWithStore;
