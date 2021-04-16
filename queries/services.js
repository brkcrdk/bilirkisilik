import { gql } from '@apollo/client';
import client from './client';

const pageSettings = async () => {
  const { data } = await client.query({
    query: gql`
      query Navigation {
        services {
          sectionTitle
          sectionDescription
          cardImage {
            url
          }
          title
          description
        }
      }
    `,
  });

  return data.services;
};

export default pageSettings;
