import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'components';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import Info from './Info';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollPosition = () => {
      if (window.pageYOffset > 250) return setScrolled(true);
      return setScrolled(false);
    };
    console.log(scrolled);

    window.addEventListener('scroll', scrollPosition);
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    };
  }, [scrolled]);

  return (
    <StyledHeader>
      <Info />
      <HeaderItems>
        <Logo />
        <DesktopNavigation />
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

const HeaderItems = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 20px 0;
`;
