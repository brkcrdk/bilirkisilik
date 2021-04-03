import { Container, SectionTitle } from 'components';
import { ServicesCard } from 'components/Cards';
import styled from 'styled-components';
import { device } from 'theme';
const Services = () => (
  <StyledServices>
    <ServicesTitle
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
`;

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
  @media ${device.mini} {
    padding: 0 32px;
    row-gap: 24px;
    grid-template-columns: 1fr;
  }
`;

const ServicesTitle = styled(SectionTitle)`
  margin-bottom: 64px;
`;
