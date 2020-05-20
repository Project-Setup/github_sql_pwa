/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactChild } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore, {
  ModifiedConfigureStoreOptions,
} from 'utils/redux/configureStore';
import IndexPage from 'pages/index';
import { act } from 'react-dom/test-utils';

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

describe('IndexPage', () => {
  const testProp = {
    test: 'test',
  };

  let TestIndexPageWrapper: ReactWrapper;

  beforeAll(async () => {
    await act(async () => {
      TestIndexPageWrapper = mountWithStore(<IndexPage {...testProp} />)();
    });
  });

  it('should render without throwing an error', () => {
    expect(TestIndexPageWrapper).toMatchSnapshot();
  });

  it('should render appProps correctly', () => {
    expect(TestIndexPageWrapper.find('p').at(0).text()).toContain(
      JSON.stringify(testProp)
    );
  });

  it('should render page process env correctly', () => {
    expect(TestIndexPageWrapper.find('p').at(1).text()).toContain(
      process.env.NEXT_PUBLIC_TEST_PAGE_VAR
    );
  });
});
