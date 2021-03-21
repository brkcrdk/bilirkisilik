import navigationData from 'data/navigation.json';
import styled from 'styled-components';
import { color, device } from 'theme';
import { useState } from 'react';
import Dropdown from './Dropdown';
import { CustomLink } from 'components';

const DesktopNavigation = ({ scrolled, routeInfo }) => {
  const [closeToCorner, setCloseToCorner] = useState(false);
  const { asPath, parentRoute } = routeInfo;

  const handleDropdownPosition = (e) => {
    const margin = window.outerWidth - e.clientX;
    if (margin < 250) {
      setCloseToCorner(true);
    }
  };

  return (
    <StyledNavigation>
      {navigationData?.map((item) =>
        item.sublinks ? (
          <MenuItem
            active={parentRoute === item.label.toLowerCase()}
            scrolled={scrolled}
            hasSubLinks
            key={item.label}
            onMouseEnter={handleDropdownPosition}
            onMouseLeave={() => setCloseToCorner(false)}
          >
            <Dropdown title={item.label} isCloseToCorner={closeToCorner}>
              {item.sublinks.map((link) => (
                <CustomLink
                  key={link.label}
                  alt={link.label}
                  title={link.label}
                  route={link.route}
                >
                  {link.label}
                </CustomLink>
              ))}
            </Dropdown>
          </MenuItem>
        ) : (
          <MenuItem key={item.label} active={asPath === item.route}>
            <CustomLink
              route={item.route}
              key={item.label}
              alt={item.label}
              title={item.label}
            >
              {item.label}
            </CustomLink>
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
