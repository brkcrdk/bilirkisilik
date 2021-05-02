import { useState } from 'react';
import styled from 'styled-components';
import { CustomLink } from 'components';
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
      {navigation?.map((item) =>
        item.subLinks ? (
          <MenuItem
            active={parentRoute === item.linkLabel.toLowerCase()}
            scrolled={scrolled}
            hasSubLinks
            color={
              scrolled
                ? colors.scrolled.hasSubLinks
                : colors.unScrolled.hasSubLinks
            }
            key={item.linkLabel}
            onMouseEnter={handleDropdownPosition}
            onMouseLeave={() => setCloseToCorner(false)}
          >
            <Dropdown
              title={item.linkLabel}
              scrolled={scrolled}
              isCloseToCorner={closeToCorner}
            >
              {item.subLinks.map((link) => (
                <CustomLink
                  key={link.linkLabel}
                  alt={link.linkLabel}
                  title={link.linkLabel}
                  route={link.linkRoute}
                >
                  {link.linkLabel}
                </CustomLink>
              ))}
            </Dropdown>
          </MenuItem>
        ) : (
          <MenuItem
            key={item.linkLabel}
            scrolled={scrolled}
            active={asPath === item.route}
            color={
              scrolled ? colors.scrolled.default : colors.unScrolled.default
            }
          >
            <CustomLink
              route={item.linkRoute}
              alt={item.linkLabel}
              title={item.linkLabel}
            >
              {item.linkLabel}
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
  font-size: ${theme.font16};
  cursor: pointer;
  position: relative;
  padding: 8px;
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
