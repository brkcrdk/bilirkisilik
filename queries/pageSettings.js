import { gql } from '@apollo/client';
import { client } from 'utils';

const pageSettings = async () => {
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
        settings {
          siteName
          adres {
            latitude
            longitude
          }
        }
      }
    `,
  });

  return data;
};

export default pageSettings;
