import React from 'react';
import { NextPage } from 'next';
import CountDiv from '../features/count/CountDiv';

const IndexPage: NextPage<{ [key in string]?: string }> = ({ ...appProps }) => (
  <div>
    <p>{`Props from _app.tsx: ${JSON.stringify(appProps)}`}</p>
    <p>{`page process env: ${process.env.TEST_PAGE_VAR}`}</p>
    <CountDiv />
  </div>
);

export default IndexPage;
