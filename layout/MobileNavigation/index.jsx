import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useSidebar } from 'hooks';
import { Logo } from 'components';
import { device, color } from 'theme';
import Hamburger from '../Hamburger';
import LinkContainer from './LinkContainer';
import InfoSection from './InfoSection';

const MobileNavigation = ({ routeInfo, navigation }) => {
  const containerRef = useRef();
  const { isSidebarOpen, closeSidebar } = useSidebar(containerRef);
  const { asPath, parentRoute } = routeInfo;

  return (
    <StyledNavigation
      ref={containerRef}
      initial={{ right: '-100%' }}
      animate={isSidebarOpen ? { right: 0 } : { right: '-100%' }}
      transition={{
        type: 'tween',
        duration: 0.6,
        delay: isSidebarOpen ? 0 : 0.4,
      }}
    >
      <HeaderSection>
        <Logo width={125} />
        <Hamburger burgerColor={color.primary} />
      </HeaderSection>
      <LinkContainer
        asPath={asPath}
        parentRoute={parentRoute}
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
      <InfoSection />
    </StyledNavigation>
  );
};
export default MobileNavigation;

const StyledNavigation = styled(motion.nav)`
  display: none;
  position: fixed;
  top: 0;
  width: 50%;
  max-width: 600px;
  height: 100vh;
  background: ${color.backgroundColor};
  padding: 10px 0;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media ${device.tablet} {
    display: flex;
    width: 70%;
  }
  @media ${device.phone} {
    width: 100%;
  }
`;
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 10px 20px 0 20px;
  .hamburger-btn {
    position: absolute;
    top: 16px;
    right: 10px;
  }
`;
