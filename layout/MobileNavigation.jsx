import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device, color } from 'theme';
import Hamburger from './Hamburger';
import { useSidebar } from 'hooks';
import { AccordionItem } from 'components';

const MobileNavigation = () => {
  const containerRef = useRef();
  const { isSidebarOpen } = useSidebar(containerRef);

  const animationVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: 50,
      opacity: 0,
      transition: {
        type: 'tween',
      },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
      },
    },
  };

  return (
    <StyledNavigation
      ref={containerRef}
      initial={{ right: 0 }}
      animate={isSidebarOpen ? { right: 0 } : { right: '-100%' }}
      transition={{
        type: 'tween',
        duration: 0.6,
        delay: isSidebarOpen ? 0 : 0.4,
      }}
    >
      <Hamburger burgerColor={color.primary} />
      <div />
      <motion.ul
        variants={animationVariants}
        initial="hidden"
        animate={isSidebarOpen ? 'show' : 'hidden'}
      >
        <motion.li variants={itemVariants}>1</motion.li>
        <motion.li variants={itemVariants}>2</motion.li>
        <motion.li variants={itemVariants}>2</motion.li>
        <motion.li variants={itemVariants}>2</motion.li>
        <motion.li variants={itemVariants}>Title title asd</motion.li>
        <motion.li variants={itemVariants}>Title</motion.li>
        <motion.li variants={itemVariants}>Accordion</motion.li>
        <AccordionItem variants={itemVariants}>Accordion</AccordionItem>
      </motion.ul>
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

const LinkContainer = styled.ul``;
const AnimatedLinkItem = styled.li``;
