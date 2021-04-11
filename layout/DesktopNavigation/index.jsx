import { useState } from 'react';
import styled from 'styled-components';
import { CustomLink } from 'components';
import navigationData from 'data/navigation.json';
import { color, device, theme } from 'theme';
import Dropdown from './Dropdown';

const DesktopNavigation = ({ scrolled, routeInfo, navigation }) => {
  const [closeToCorner, setCloseToCorner] = useState(false);
  const { asPath, parentRoute } = routeInfo;

  const handleDropdownPosition = (e) => {
    const margin = window.outerWidth - e.clientX;
    if (margin <= 300) {
      setCloseToCorner(true);
    }
  };

  console.log(navigation);

  const colors = {
    unScrolled: {
      hasSubLinks: {
        hover: {
          color: color.backgroundColor,
          backgroundColor: 'transparent',
        },
        normal: {
          color: color.backgroundColor,
          backgroundColor: 'transparent',
        },
      },
      default: {
        hover: {
          color: color.primary,
          backgroundColor: color.backgroundColor,
        },
        normal: {
          color: color.backgroundColor,
          backgroundColor: 'transparent',
        },
      },
    },
    scrolled: {
      hasSubLinks: {
        hover: {
          color: color.primary,
          backgroundColor: color.backgroundColor,
        },
        normal: {
          color: color.primary,
          backgroundColor: color.backgroundColor,
        },
      },
      default: {
        hover: {
          color: color.backgroundColor,
          backgroundColor: color.primary,
        },
        normal: {
          backgroundColor: color.backgroundColor,
          color: color.primary,
        },
      },
    },
  };

  return (
    <StyledNavigation>
      {navigationData?.map((item) =>
        item.sublinks ? (
          <MenuItem
            active={parentRoute === item.label.toLowerCase()}
            scrolled={scrolled}
            hasSubLinks
            color={
              scrolled
                ? colors.scrolled.hasSubLinks
                : colors.unScrolled.hasSubLinks
            }
            key={item.label}
            onMouseEnter={handleDropdownPosition}
            onMouseLeave={() => setCloseToCorner(false)}
          >
            <Dropdown
              title={item.label}
              scrolled={scrolled}
              isCloseToCorner={closeToCorner}
            >
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
          <MenuItem
            key={item.label}
            scrolled={scrolled}
            active={asPath === item.route}
            color={
              scrolled ? colors.scrolled.default : colors.unScrolled.default
            }
          >
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
  font-size: ${theme.font20};
  cursor: pointer;
  position: relative;
  padding: 10px;
  font-weight: ${(p) => p.active && 800};
  color: ${(p) => p.color && p.color.normal.color};
  background: ${(p) => p.color && p.color.normal.backgroundColor};
  transition: all 0.3s ease-in-out;
  border-radius: ${theme.borderRadius};
  &:hover {
    color: ${(p) => p.color && p.color.hover.color};
    background: ${(p) => p.color && p.color.hover.backgroundColor};
    div {
      display: block;
      animation-name: dropdownFadeIn;
    }
  }
`;
