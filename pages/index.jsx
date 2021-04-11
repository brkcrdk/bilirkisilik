import { gql } from '@apollo/client';
import client from 'client';
import Layout from 'layout';

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

  const mainLinks = data.navigasyons.filter((item) => item.isMainLink === true);

  const navigation = mainLinks.map((item) => {
    if (item.hasSubLinks) {
      return {
        ...item,
        subLinks: data.navigasyons.filter(
          (link) => link.kategori === item.kategori && !link.hasSubLinks
        ),
      };
    }
    return item;
  });

  return {
    props: {
      navigation,
    },
  };
}
