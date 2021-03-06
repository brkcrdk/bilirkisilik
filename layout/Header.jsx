import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import { Container } from 'components';

const Header = () => (
  <header>
    <Container>
      <Logo />
      <DesktopNavigation />
    </Container>
  </header>
);
export default Header;
