import React, { PropsWithChildren, FC, useEffect } from 'react';
import NextHead from 'next/head';
import { join } from 'path';
import Link from '../link/Link';

/* eslint-disable prefer-destructuring */
const LINK_PREFIX = process.env.LINK_PREFIX || '';
const THEME_COLOR = process.env.THEME_COLOR;
const MANIEFST_PATH = process.env.MANIEFST_PATH;
const ICON_192_PATH = process.env.ICON_192_PATH;
const FAV_ICON_PATH = process.env.FAV_ICON_PATH;
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
  isAmp = false,
  children,
}) => {
  const linkToAdd: Record<string, { [key in string]: string }> = {};
  if (hrefManifest) {
    linkToAdd.manifest = { href: join(linkPrefix, hrefManifest) };
  }
  if (!isAmp && hrefCanonical) {
    linkToAdd.canonical = { href: join(linkPrefix, hrefCanonical) };
  }
  if (favIconPath) {
    linkToAdd['shortcut icon'] = { href: join(linkPrefix, favIconPath) };
  }
  if (appleIconPath) {
    linkToAdd['apple-touch-icon'] = {
      href: join(linkPrefix, appleIconPath),
      sizes: appleIconSize,
    };
  }

  useEffect(() => {
    const linkTags = Object.entries(linkToAdd).map(([rel, attrs]) => {
      const tag = document.createElement('link');
      tag.setAttribute('rel', rel);
      Object.keys(attrs).forEach((attr) => {
        tag.setAttribute(attr, attrs[attr]);
      });
      return tag;
    });
    const headElement = document.getElementsByTagName('head').item(0);
    linkTags.forEach((tag) => {
      if (headElement) {
        headElement.appendChild(tag);
      }
    });
    return () => {
      linkTags.forEach((tag) => {
        if (headElement) {
          headElement.removeChild(tag);
        }
      });
    };
  }, []);
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
      {refresh && (
        <meta httpEquiv="refresh" key="refresh" content={`${refresh}`} />
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
        <Link href={appleIconPath} key="apple-touch-icon" passHref>
          <link
            rel="apple-touch-icon"
            key="apple-touch-icon"
            sizes={appleIconSize}
          />
        </Link>
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
