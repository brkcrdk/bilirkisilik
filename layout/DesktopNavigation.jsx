import navigationData from 'data/navigation.json';
import styled from 'styled-components';
import Link from 'next/link';
import { color, device } from 'theme';
import { useState } from 'react';

const DesktopNavigation = ({ scrolled, routeInfo }) => {
  const [closeToCorner, setCloseToCorner] = useState(false);
  const { asPath, parentRoute } = routeInfo;

  return (
    <StyledNavigation>
      {navigationData?.map((item) =>
        item.sublinks ? (
          <MenuItem
            active={parentRoute === item.label.toLowerCase()}
            scrolled={scrolled}
            hasSubLinks
            key={item.label}
            onMouseEnter={(e) => {
              const margin = window.outerWidth - e.clientX;
              if (margin < 250) {
                setCloseToCorner(true);
              }
            }}
            onMouseLeave={() => setCloseToCorner(false)}
          >
            <span>{item.label}</span>
            <Dropdown isCloseToCorner={closeToCorner} scrolled={scrolled}>
              <DropdownContent>
                {item.sublinks.map((link) => (
                  <Link key={link.label} href={link.route} passHref>
                    <a alt={link.label} title={link.label}>
                      {link.label}
                    </a>
                  </Link>
                ))}
              </DropdownContent>
            </Dropdown>
          </MenuItem>
        ) : (
          <MenuItem key={item.label} active={asPath === item.route}>
            <Link href={item.route} passHref>
              <a alt={item.label} title={item.label}>
                {item.label}
              </a>
            </Link>
          </MenuItem>
        )
      )}
    </StyledNavigation>
  );
};

export default DesktopNavigation;

const StyledNavigation = styled.nav`
  display: flex;
  @media ${device.laptop} {
    display: none;
  }
`;

const MenuItem = styled.div`
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  padding: 10px;
  font-weight: ${(p) => p.active && 800};

  &:hover {
    color: ${(p) =>
      p.hasSubLinks && !p.scrolled ? color.backgroundColor : color.primary};
    background-color: ${(p) => !p.hasSubLinks && color.backgroundColor};
    border-radius: 6px;
    div {
      display: block;
      animation-name: dropdownFadeIn;
    }
  }
`;

const Dropdown = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  right: ${(p) => p.isCloseToCorner && '75px'};

  animation-duration: 0.3s;
  animation-iteration-count: 1;
  @keyframes dropdownFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const DropdownContent = styled.ul`
  display: grid;
  position: absolute;
  background: ${color.backgroundColor};
  max-width: 200px;
  min-width: 100px;
  overflow: hidden;
  border-radius: 6px;
  padding: 10px;
  margin-top: 24px;
  a {
    color: ${color.text600};
    white-space: nowrap;
    margin: 8px 0;
    font-weight: 400;

    &:hover {
      color: ${color.primary};
    }
  }
`;
