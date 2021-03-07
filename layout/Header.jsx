import styled from 'styled-components';
import { Container } from 'components';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';

const Header = () => (
  <StyledHeader>
    <HeaderItems>
      <Logo />
      <DesktopNavigation />
    </HeaderItems>
  </StyledHeader>
);
export default Header;

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  z-index: 9999;
  padding: 40px 0;
`;

const HeaderItems = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
