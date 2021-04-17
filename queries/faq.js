import { gql } from '@apollo/client';
import client from './client';

const faq = async () => {
  const { data } = await client.query({
    query: gql`
      query Faq {
        faqs {
          sectionTitle
          sectionDescription
          title
          content {
            html
          }
        }
      }
    `,
  });

  return data.faqs;
};

export default faq;
