import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import { useSidebar } from 'hooks';
import { AccordionItem, ContactButtons, SocialButtons } from 'components';
import { device, color } from 'theme';
import Hamburger from './Hamburger';
import navigationData from 'data/navigation.json';

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
        delayChildren: isSidebarOpen ? 0 : 0.4,
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
      <LinkContainer
        variants={animationVariants}
        initial="hidden"
        animate={isSidebarOpen ? 'show' : 'hidden'}
      >
        {navigationData.map((link) =>
          link.sublinks ? (
            <AccordionItem
              key={link.label}
              variants={itemVariants}
              title={link.label}
            >
              {link.sublinks.map((sublink) => (
                <AnimatedLinkItem key={sublink.label}>
                  <Link href={sublink.route} passHref>
                    <a>{sublink.label}</a>
                  </Link>
                </AnimatedLinkItem>
              ))}
            </AccordionItem>
          ) : (
            <AnimatedLinkItem variants={itemVariants} key={link.label}>
              <Link href={link.route} passHref>
                <a>{link.label}</a>
              </Link>
            </AnimatedLinkItem>
          )
        )}
      </LinkContainer>
      <InfoSection>
        <ContactButtons />
        <SocialButtons />
      </InfoSection>
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

const LinkContainer = styled(motion.ul)`
  width: 100%;
  padding: 0 20px;
`;

const AnimatedLinkItem = styled(motion.li)`
  cursor: pointer;
  font-size: 20px;
  color: ${color.primary};
  margin: 10px 0;
`;

const InfoSection = styled.div`
  a {
    color: ${color.primary};
  }
  label {
    font-weight: 700;
  }
  margin-bottom: 20px;
  .contact-btns {
    margin-bottom: 20px;
  }
`;
