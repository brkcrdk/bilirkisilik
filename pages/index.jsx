import { gql } from '@apollo/client';
import client from 'client';
import Layout from 'layout';
import { handleNavigation } from 'utils';

import { Hero, Services, WorkWithUs, Faq } from 'page-components/Home';

export default function Home({ navigation }) {
  return (
    <Layout navigation={navigation}>
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

  return {
    props: {
      navigation,
    },
  };
}
