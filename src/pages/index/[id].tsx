import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import TextDiv from 'features/text/TextDiv';
import ManifestHead from 'features/head/ManifestHead';
import Link from 'features/link/Link';

export interface Props {
  id?: string;
}

const IndexPage: NextPage<Props> = ({ id, ...appProps }) => {
  const router = useRouter();
  return (
    <div>
      <ManifestHead
        title="github_pwa dynamic-path"
        hrefCanonical={`/index/${id}`}
      />
      <p>{`Param: ${router?.isFallback ? 'Hold on' : id}`}</p>
      <p>{`Props from _app.tsx: ${JSON.stringify(appProps)}`}</p>
      <p>{`Page Process Env: ${process.env.TEST_PAGE_VAR}`}</p>
      <TextDiv />
      <Link href="/">
        <a>index</a>
      </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  return {
    props: {
      ...params,
      staticPageProcessEnv: process.env.TEST_STATIC_PAGE_PROP,
    },
  } as { props: Props };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { id: '1' } }],
  fallback: true,
});
export default IndexPage;
