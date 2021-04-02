import styled from 'styled-components';
import { Container, SectionTitle } from 'components';
import { WorkWithUsCard } from 'components/Cards';
const WorkWithUs = () => (
  <StyledWorkWithUs>
    <SectionTitle
      title="Neden Biz?"
      description="Neden bizimle çalışmalısınız"
    />
    <CardContainer>
      <WorkWithUsCard />
      <WorkWithUsCard />
      <WorkWithUsCard />
      <WorkWithUsCard />
      <WorkWithUsCard />
      <WorkWithUsCard />
    </CardContainer>
  </StyledWorkWithUs>
);
export default WorkWithUs;

const StyledWorkWithUs = styled(Container)`
  margin-top: 100px;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 24px;
  margin-top: 100px;
`;
