import styled from 'styled-components';

import { Hero, Services, WorkWithUs, Faq } from 'page-components/Home';

export default function Home() {
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
