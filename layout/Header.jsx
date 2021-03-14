import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'components';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import Info from './Info';
import { color } from 'theme';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentY, setCurrentY] = useState(0);
  const [shouldHide, setShouldHide] = useState(false);
  useEffect(() => {
    const scrollPosition = () => {
      if (window.pageYOffset > 70) return setScrolled(true);
      return setScrolled(false);
    };
    window.addEventListener('scroll', scrollPosition);
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pageYOffset - currentY < 0) {
        setShouldHide(false);
      } else {
        setShouldHide(true);
      }
      return setCurrentY(pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentY, shouldHide]);

  return (
    <StyledHeader
      scrolled={scrolled}
      animate={shouldHide && currentY > 200 ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <Info scrolled={scrolled} />
      <HeaderItems scrolled={scrolled}>
        <HeaderContent scrolled={scrolled}>
          <Logo lightLogo={!scrolled} width={scrolled ? 150 : 200} />
          <DesktopNavigation scrolled={scrolled} />
        </HeaderContent>
      </HeaderItems>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(motion.header)`
  position: ${(p) => (p.scrolled ? 'fixed' : 'absolute')};
  width: 100%;
  z-index: 9999;
`;

const HeaderItems = styled.div`
  width: 100%;
  background: ${(p) => (p.scrolled ? color.backgroundColor : 'transparent')};
  position: ${(p) => p.scrolled && 'fixed'};
  top: 0;
  border-bottom: ${(p) => p.scrolled && `1px solid ${color.primary}`};
`;

const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(p) => (p.scrolled ? color.text800 : 'white')};
  padding-top: ${(p) => (p.scrolled ? '10px' : '20px')};
  padding-bottom: ${(p) => (p.scrolled ? '10px' : '20px')};
`;
