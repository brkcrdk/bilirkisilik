import styled from 'styled-components';
import { SectionContainer } from 'components';
import { device } from 'theme';
import WorkWithUsCard from './WorkWithUsCard';

const WorkWithUs = () => (
  <SectionContainer
    title="Neden Biz?"
    description="Neden bizimle çalışmalısınız"
  >
    <CardContainer>
      <WorkWithUsCard />
      <WorkWithUsCard />
      <WorkWithUsCard />
      <WorkWithUsCard />
      <WorkWithUsCard />
      <WorkWithUsCard />
    </CardContainer>
  </SectionContainer>
);
export default WorkWithUs;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 24px;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media ${device.phone} {
    padding: 0 12px;
    row-gap: 24px;
    grid-template-columns: 1fr;
  }
`;
