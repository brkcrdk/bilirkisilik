import { gql } from '@apollo/client';
import client from './client';

const services = async () => {
  const { data } = await client.query({
    query: gql`
      query Services {
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

export default services;
