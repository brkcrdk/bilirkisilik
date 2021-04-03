import { Container, SectionTitle } from 'components';
import styled from 'styled-components';
import { device } from 'theme';
import ServicesCard from './ServicesCard';

const Services = () => (
  <StyledServices>
    <SectionTitle
      title="Hizmetlerimiz"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the is simply dummy text of the printing."
    />
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
  </StyledServices>
);
export default Services;

const StyledServices = styled(Container)`
  margin-top: 100px;
  @media ${device.tablet} {
    margin-top: 70px;
  }
`;

const ServiceCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 0 24px;
  margin-top: 100px;
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px 12px;
    padding: 0 12px;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 70px;
  }
  @media ${device.phone} {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;
