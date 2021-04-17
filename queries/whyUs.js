import { gql } from '@apollo/client';
import client from './client';

const whyUs = async () => {
  const { data } = await client.query({
    query: gql`
      query WhyUs {
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

export default whyUs;
