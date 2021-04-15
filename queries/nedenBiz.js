import { gql } from '@apollo/client';
import client from './client';

const pageSettings = async () => {
  const { data } = await client.query({
    query: gql`
      query Navigation {
        nedenBizs {
          title
          description
          sectionTitle
          sectionDescription
          icon {
            url
          }
        }
      }
    `,
  });

  return data.nedenBizs;
};

export default pageSettings;
