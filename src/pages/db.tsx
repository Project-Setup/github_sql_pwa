import React from 'react';
import { NextPage } from 'next';
import ManifestHead from 'features/head/ManifestHead';
import Link from 'features/link/Link';
import DbComponent from 'features/db/DbTest';

const IndexPage: NextPage<{ [key in string]?: string }> = () => (
  <main>
    <ManifestHead title="github_pwa static-path" hrefCanonical="/db" />
    <DbComponent />
    <Link href="/index/1">
      <a>index/1</a>
    </Link>
  </main>
);

export default IndexPage;
