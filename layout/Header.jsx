import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'components';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import Info from './Info';
import { color } from 'theme';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollPosition = () => {
      if (window.pageYOffset > 100) return setScrolled(true);
      return setScrolled(false);
    };
    window.addEventListener('scroll', scrollPosition);
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    };
  }, [scrolled]);

  return (
    <StyledHeader>
      <Info />
      <HeaderItems scrolled={scrolled}>
        <HeaderContent scrolled={scrolled}>
          <Logo lightLogo={!scrolled} width={scrolled ? 150 : 200} />
          <DesktopNavigation />
        </HeaderContent>
      </HeaderItems>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  z-index: 9999;
`;

const HeaderItems = styled.div`
  width: 100%;
  padding: 20px 0;
  background: ${(p) => (p.scrolled ? 'rgba(255,255,255,0.9)' : 'transparent')};
  position: ${(p) => p.scrolled && 'fixed'};
  top: 0;
  animation-name: ${(p) => p.scrolled && 'fadeIn'};
  animation-duration: 0.5s;
  animation-iteration-count: 1;

  @keyframes fadeIn {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(p) => (p.scrolled ? color.text800 : 'white')};
`;
