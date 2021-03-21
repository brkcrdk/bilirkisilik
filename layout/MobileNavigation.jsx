import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { device, color } from 'theme';
import Hamburger from './Hamburger';
import { useSidebar } from 'hooks';

const MobileNavigation = () => {
  const containerRef = useRef();
  const { isSidebarOpen } = useSidebar(containerRef);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <StyledNavigation
      ref={containerRef}
      initial={{ right: 0 }}
      // animate={isSidebarOpen ? { right: 0 } : { right: '-100%' }}
      transition={{ type: 'tween', duration: 0.6 }}
    >
      <Hamburger burgerColor={color.primary} />
      <div />
      <AnimatePresence>
        <AnimatedLinks
          variants={container}
          initial="hidden"
          animate={isSidebarOpen ? 'show' : 'hidden'}
        >
          {[1, 3, 4, 6].map((link) => (
            <AnimatedLink
              transition={{ duration: 0.3, type: 'tween' }}
              key={link}
            >
              1
            </AnimatedLink>
          ))}
        </AnimatedLinks>
      </AnimatePresence>
      <p>socials</p>
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
  @media ${device.mini} {
    width: 100%;
  }

  .hamburger-btn {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

const AnimatedLinks = styled(motion.ul)``;
const AnimatedLink = styled(motion.li)``;
