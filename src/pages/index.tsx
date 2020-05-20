import React from 'react';
import { NextPage } from 'next';
import CountDiv from 'features/count/CountDiv';
import ManifestHead from 'features/head/ManifestHead';
import Link from 'features/link/Link';

const IndexPage: NextPage<{ [key in string]?: string }> = ({ ...appProps }) => (
  <main>
    <ManifestHead title="github_pwa static-path" hrefCanonical="/" />
    <p>{`Props from _app.tsx: ${JSON.stringify(appProps)}`}</p>
    <p>{`page process env: ${process.env.NEXT_PUBLIC_TEST_PAGE_VAR}`}</p>
    <CountDiv />
    <Link href="/index/1">
      <a>index/1</a>
    </Link>
  </main>
);

export default IndexPage;
