import React, { PropsWithChildren, FC } from 'react';
import NextHead from 'next/head';
import { join } from 'path';
// import Link from '../link/Link';

/* eslint-disable prefer-destructuring */
const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';
const THEME_COLOR = process.env.NEXT_PUBLIC_THEME_COLOR;
const MANIEFST_PATH = process.env.NEXT_PUBLIC_MANIEFST_PATH;
const ICON_192_PATH = process.env.NEXT_PUBLIC_ICON_192_PATH;
const FAV_ICON_PATH = process.env.NEXT_PUBLIC_FAV_ICON_PATH;
/* eslint-enable prefer-destructuring */

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
  charset?: string;
  linkPrefix?: string;
  hrefCanonical?: string;
  hrefManifest?: string;
  themeColor?: string;
  favIconPath?: string;
  keywords?: string;
  refresh?: number;
  appleIconPath?: string;
  appleIconSize?: string;
  isAmp?: string;
}>;

const ManifestHead: FC<Props> = ({
  title = '',
  description = title,
  charset = 'utf-8',
  linkPrefix = LINK_PREFIX,
  hrefCanonical,
  hrefManifest = MANIEFST_PATH,
  themeColor = THEME_COLOR,
  favIconPath = FAV_ICON_PATH,
  keywords = title,
  refresh,
  appleIconPath = ICON_192_PATH,
  appleIconSize = '192x192',
  isAmp,
  children,
}) => {
  return (
    <NextHead>
      <title key="title">{title}</title>
      <meta charSet={charset} key="charSet" />
      <meta name="description" key="description" content={description} />
      {themeColor && (
        <meta name="theme-color" key="theme-color" content={themeColor} />
      )}
      <meta name="keywords" key="keywords" content={keywords} />
      <meta httpEquiv="X-UA-Compatible" key="ua-compatible" content="ie=edge" />
      {!isAmp && hrefCanonical && (
        <link rel="canonical" href={join(linkPrefix, hrefCanonical)} />
      )}
      {hrefManifest && (
        <link rel="manifest" href={join(linkPrefix, hrefManifest)} />
      )}
      {refresh && (
        <meta httpEquiv="refresh" key="refresh" content={`${refresh}`} />
      )}
      {favIconPath && (
        <link rel="shortcut icon" href={join(linkPrefix, favIconPath)} />
      )}

      {/* for safari */}
      <meta
        name="apple-mobile-web-app-capable"
        key="apple-mobile-web-app-capable"
        content="yes"
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        key="apple-mobile-web-app-status-bar-style"
        content="blue"
      />
      <meta
        name="apple-mobile-web-app-title"
        key="apple-mobile-web-app-title"
        content="With Manifest"
      />
      {appleIconPath && appleIconSize && (
        <link
          rel="apple-touch-icon"
          sizes={appleIconSize}
          href={join(linkPrefix, appleIconPath)}
        />
      )}

      {/* for IE */}
      {appleIconPath && (
        <meta
          name="msapplication-TitleImage"
          key="msapplication-TitleImage"
          content={join(linkPrefix, appleIconPath)}
        />
      )}
      {themeColor && (
        <meta
          name="msapplication-TitleColor"
          key="msapplication-TitleColor"
          content={themeColor}
        />
      )}
      {children}
    </NextHead>
  );
};

export default ManifestHead;
