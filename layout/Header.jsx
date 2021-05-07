import styled from 'styled-components';
import { Container, Logo } from 'components';
import { motion } from 'framer-motion';
import { color, sizes } from 'theme';
import { useHeaderScroll, useWindowWidth } from 'hooks';
import { useRouter } from 'next/router';
import { device, theme } from 'theme';
import Info from './Info';
import Hamburger from './Hamburger';
import MobileNavigation from './MobileNavigation/index';
import DesktopNavigation from './DesktopNavigation/index';

const Header = ({ navigation }) => {
  const { hideHeader, scrolled } = useHeaderScroll();
  const { windowWidth } = useWindowWidth();
  const isPhone = windowWidth <= sizes.phone;
  const headerItemAnimations = isPhone ? { top: 0 } : { top: 70 };
  const logoSizes = scrolled ? (isPhone ? 125 : 170) : isPhone ? 150 : 200;

  const { asPath } = useRouter();
  const parentRoute = asPath.split('/')[1];

  const routeInfo = { asPath, parentRoute };

  return (
    <StyledHeader
      scrolled={scrolled}
      animate={hideHeader ? { top: -100, opacity: 0 } : { top: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'tween' }}
    >
      <Info scrolled={scrolled} />
      <HeaderItems
        scrolled={scrolled}
        animate={scrolled ? { top: 0 } : headerItemAnimations}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <HeaderContent scrolled={scrolled}>
          <StyledLogo lightLogo={!scrolled} width={logoSizes} />
          <DesktopNavigation
            scrolled={scrolled}
            routeInfo={routeInfo}
            navigation={navigation}
          />
          <Hamburger
            size={scrolled ? 0.7 : 0.9}
            burgerColor={scrolled && color.primary}
          />
        </HeaderContent>
      </HeaderItems>
      <MobileNavigation routeInfo={routeInfo} navigation={navigation} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(motion.header)`
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const HeaderItems = styled(motion.div)`
  width: 100%;
  background: ${(p) => (p.scrolled ? color.backgroundColor : 'transparent')};
  position: absolute;
  transition: background 0.3s ease-in-out;
  box-shadow: ${(p) => p.scrolled && theme.boxShadow200};
`;

const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(p) => (p.scrolled ? color.text800 : 'white')};
  padding: 16px 0;

  @media ${device.laptop} {
    padding: 15px 0;
  }
`;

const StyledLogo = styled(Logo)`
  max-height: 60px;
`;
