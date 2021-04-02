import styled from 'styled-components';

import { Hero, Services, WorkWithUs } from 'page-components/Home';

export default function Home() {
  return (
    <Container>
      <Hero />
      <WorkWithUs />
      <Services />
    </Container>
  );
}

const Container = styled.div``;
