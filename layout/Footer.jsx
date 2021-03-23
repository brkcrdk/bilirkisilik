import styled from 'styled-components';
import { Container } from 'components';
const Footer = () => (
  <StyledFooter>
    <FooterContent>ads</FooterContent>
  </StyledFooter>
);
export default Footer;

const StyledFooter = styled.footer`
  padding: 100px 0;
`;

const FooterContent = styled(Container)`
  border: 1px solid red;
  background: #fff;
`;
