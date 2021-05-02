import { SectionContainer } from 'components';
import styled from 'styled-components';
import { device } from 'theme';
import ServicesCard from './ServicesCard';

function Services({ data }) {
  const pageTitle = data[0]?.sectionTitle;
  const pageDescription = data[0]?.sectionDescription;
  return (
    <SectionContainer title={pageTitle} description={pageDescription}>
      <ServiceCards>
        {data.map((service, index) => (
          <ServicesCard
            key={`${service.title}-${index}`}
            title={service.title}
            description={service.description}
            route={service.route}
            background={service.cardImage.url}
          />
        ))}
      </ServiceCards>
    </SectionContainer>
  );
}
export default Services;

const ServiceCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 0 24px;
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px 12px;
    padding: 0 12px;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media ${device.phone} {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;
