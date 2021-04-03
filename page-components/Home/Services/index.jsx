import { Container, SectionTitle, SectionContainer } from 'components';
import styled from 'styled-components';
import { device } from 'theme';
import ServicesCard from './ServicesCard';

const Services = () => (
  <SectionContainer
    title="Hizmetlerimiz"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the is simply dummy text of the printing."
  >
    <ServiceCards>
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </ServiceCards>
  </SectionContainer>
);
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
