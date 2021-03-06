/* eslint-disable max-len */
import { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SettingsContext } from 'context';

import Footer from './Footer';
import Header from './Header';
import { color } from 'theme';

const Layout = ({ children, settings }) => {
  const {
    navigation,
    footerNav,
    settings: { siteName, siteDescription, siteLogo, siteIcon },
  } = settings;

  // İç sayfalarda sayfa ismini al, routetan / çıkar
  // İsimden - çıkar ilk harfleri büyük yapıp aralarına boşluk ekle
  const { asPath } = useRouter();
  const currentPage = asPath.split('/')[1];
  const pageTitle =
    currentPage !== '' &&
    currentPage
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const { setSettings } = useContext(SettingsContext);
  useEffect(() => {
    setSettings(settings.settings);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={siteDescription} />
        <link rel="shortcut icon" href={siteIcon.url} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteLogo.url} />
        <meta property="og:site_name" content={siteName} />
        <meta property="twitter:title" content={siteName} />
        <meta property="twitter:description" content={siteDescription} />
        <meta property="twitter:image" content={siteLogo.url} />
        <meta name="twitter:image:alt" content={siteName} />
        <meta name="twitter:site" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content={color.backgroundColor} />
        <title>{pageTitle ? `${pageTitle} - ${siteName}` : siteName}</title>
      </Head>
      <Header navigation={navigation} />
      <Content>{children}</Content>
      <Footer navigation={footerNav} />
    </>
  );
};
export default Layout;

const Content = styled(motion.main)``;
