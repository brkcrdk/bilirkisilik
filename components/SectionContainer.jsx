import styled from 'styled-components';
import { Container, SectionTitle } from 'components';
import { device } from 'theme';

const SectionContainer = ({ title, description, children, ...props }) => (
  <StyledSectionContainer {...props}>
    <CustomTitle title={title} description={description} />
    {children}
  </StyledSectionContainer>
);
export default SectionContainer;

const StyledSectionContainer = styled(Container)`
  margin-top: 100px;
  @media ${device.tablet} {
    margin-top: 70px;
  }
`;

const CustomTitle = styled(SectionTitle)`
  margin-bottom: 100px;
  @media ${device.tablet} {
    margin-bottom: 70px;
  }
`;
