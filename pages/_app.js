import Layout from 'layout';
import { Providers } from 'context';
function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
