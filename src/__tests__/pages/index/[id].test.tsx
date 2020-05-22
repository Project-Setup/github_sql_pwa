import React from 'react';
import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Page, { getStaticProps } from 'pages/index/[id]';
import mountWithStore from '__tests__/common/mountWithStore';

describe('Page', () => {
  const testProp = {
    test: 'test',
  };

  let TestPageWrapper: ReactWrapper;

  beforeAll(async () => {
    await act(async () => {
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      TestPageWrapper = mountWithStore(<Page id="testId" {...testProp} />)();
    });
    // TestPageWrapper.update();
  });

  it('should render without throwing an error', () => {
    expect(TestPageWrapper).toMatchSnapshot();
  });

  it('should render query param correctly', () => {
    expect(TestPageWrapper.find('p').at(0).text()).toContain('testId');
  });

  it('should render appProps correctly', () => {
    expect(TestPageWrapper.find('p').at(1).text()).toContain(
      JSON.stringify(testProp)
    );
  });

  it('should render page process env correctly', () => {
    expect(TestPageWrapper.find('p').at(2).text()).toContain(
      process.env.NEXT_PUBLIC_TEST_PAGE_VAR
    );
  });
});

describe('getStaticProps', () => {
  const testParams = { id: 'testParams' };
  let testResult: any;
  beforeAll(async () => {
    testResult = await getStaticProps({ params: testParams });
  });

  it('should retrieve correct params', async () => {
    expect(testResult).toHaveProperty(['props', 'id'], 'testParams');
  });

  it('should retrieve correct process env', async () => {
    expect(testResult).toHaveProperty(
      ['props', 'staticPageProcessEnv'],
      process.env.TEST_STATIC_PAGE_PROP
    );
  });
});
