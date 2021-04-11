import { gql } from '@apollo/client';
import client from 'client';
import Layout from 'layout';
import { handleNavigation, footerNavigation } from 'utils';

import { Hero, Services, WorkWithUs, Faq } from 'page-components/Home';

export default function Home({ navigation, footerNav }) {
  return (
    <Layout navigation={navigation} footerNav={footerNav}>
      <Hero />
      <WorkWithUs />
      <Services />
      <Faq />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Navigation {
        navigasyons {
          kategori
          linkLabel
          linkRoute
          hasSubLinks
          isMainLink
        }
      }
    `,
  });

  const navigation = handleNavigation(data.navigasyons);
  const footerNav = footerNavigation(data.navigasyons);

  return {
    props: {
      navigation,
      footerNav,
    },
  };
}
