import { gql } from '@apollo/client';
import client from './client';

const innerPages = async (route) => {
  const { data } = await client.query({
    query: gql`
      query InnerPages {
        icerikSayfalari(where: { route: "${route}" }) {
          headerTitle
          headerImage {
            url
          }
          content {
            html
          }
        }
      }
    `,
  });

  return data.icerikSayfalari;
};

export default innerPages;
