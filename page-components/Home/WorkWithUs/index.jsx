import styled from 'styled-components';
import { SectionContainer } from 'components';
import { device } from 'theme';
import WorkWithUsCard from './WorkWithUsCard';

function WorkWithUs({ data }) {
  const title = data[0]?.sectionTitle;
  const description = data[0]?.sectionDescription;
  return (
    <SectionContainer title={title} description={description}>
      <CardContainer>
        {data.map((item, index) => (
          <WorkWithUsCard
            key={`${item.title}-${index}`}
            icon={item.icon.url}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardContainer>
    </SectionContainer>
  );
}
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
