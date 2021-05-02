import { gql } from '@apollo/client';
import client from './client';

const pageSettings = async () => {
  const { data } = await client.query({
    query: gql`
      query HeroSlides {
        homepageSlides(orderBy: order_ASC) {
          slideTitle
          slideDescription
          slideBackground {
            url
          }
          linkRoute
        }
      }
    `,
  });

  return data.homepageSlides;
};

export default pageSettings;
