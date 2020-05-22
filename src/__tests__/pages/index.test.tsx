/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReactWrapper } from 'enzyme';
import IndexPage from 'pages/index';
import { act } from 'react-dom/test-utils';
import mountWithStore from '__tests__/common/mountWithStore';

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
