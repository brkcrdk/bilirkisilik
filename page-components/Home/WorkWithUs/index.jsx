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
  row-gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  @media ${device.phone} {
    row-gap: 24px;
    padding: 0 12px;
  }
`;
