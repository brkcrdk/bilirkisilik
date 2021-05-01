import { gql } from '@apollo/client';
import client from './client';

const pageSettings = async () => {
  const { data } = await client.query({
    query: gql`
      query HeroSlides {
        homepageSlides {
          slideTitle
          slideDescription
          slideBackground {
            url
          }
          linkRoute
          order
        }
      }
    `,
  });

  return data.homepageSlides;
};

export default pageSettings;
