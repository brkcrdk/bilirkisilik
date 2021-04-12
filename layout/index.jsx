import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children, settings }) => {
  const {
    navigation,
    footerNav,
    settings: { siteName, siteDescription, adres },
  } = settings;
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteDescription} />

        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_BASE_URL + meta?.image}
        /> */}
        {/* <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_BASE_URL + asPath}
        /> */}
        <meta property="og:site_name" content="90Pixel" />

        <meta property="twitter:title" content={siteName} />
        <meta property="twitter:description" content={siteDescription} />
        {/* <meta
          property="twitter:image"
          content={process.env.NEXT_PUBLIC_BASE_URL + meta?.image}
        /> */}
        <meta name="twitter:image:alt" content={siteName} />
        <meta name="twitter:site" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header navigation={navigation} />
      {children}
      <Footer navigation={footerNav} adres={adres} />
    </>
  );
};
export default Layout;
