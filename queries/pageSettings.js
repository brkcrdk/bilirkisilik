import { gql } from '@apollo/client';
import client from './client';

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
          siteDescription
          facebook
          instagram
          twitter
          email
          phoneNumber
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
