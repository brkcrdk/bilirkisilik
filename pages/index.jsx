import styled from 'styled-components';
import { color } from 'theme';

export default function Home() {
  return (
    <Container>
      <TestH1>Main Page</TestH1>
      <H2>Main Page</H2>
    </Container>
  );
}

const Container = styled.div``;

const TestH1 = styled.h1`
  color: ${color.primary};
  font-size: 48px;
`;

const H2 = styled.h2`
  color: ${color.text500};
  font-size: 36px;
`;
