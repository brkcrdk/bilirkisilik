import styled from 'styled-components';
import { Container, SectionTitle } from 'components';
import { device } from 'theme';
import WorkWithUsCard from './WorkWithUsCard';

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
  @media ${device.tablet} {
    margin-top: 70px;
  }
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 24px;
  margin-top: 100px;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media ${device.tablet} {
    margin-top: 70px;
  }
  @media ${device.phone} {
    padding: 0 12px;
    row-gap: 24px;
    grid-template-columns: 1fr;
  }
`;
