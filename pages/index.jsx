import styled from 'styled-components';
import { gql } from '@apollo/client';
import client from 'client';

import { Hero, Services, WorkWithUs, Faq } from 'page-components/Home';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Container>
      <Hero />
      <WorkWithUs />
      <Services />
      <Faq />
    </Container>
  );
}

const Container = styled.div``;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          id
          createdBy {
            id
            name
          }
          title
          slug
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}
