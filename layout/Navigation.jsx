import styled from 'styled-components';
import navigationData from 'data/navigation.json';
import Link from 'next/link';
import { color } from 'theme';
const Navigation = () => (
  <StyledNavigation>
    {navigationData.map((link) =>
      link.sublinks ? (
        <SubLinkWrapper key={link.label}>
          <StyledLink>{link.label}</StyledLink>
          <SubLink>
            {link.sublinks.map((sublink) => (
              <SubLinkItem key={sublink.label}>
                <Link href={sublink.route}>
                  <StyledLink>{sublink.label}</StyledLink>
                </Link>
              </SubLinkItem>
            ))}
          </SubLink>
        </SubLinkWrapper>
      ) : (
        <Link href={link.route} key={link.label}>
          <StyledLink>{link.label}</StyledLink>
        </Link>
      )
    )}
  </StyledNavigation>
);

export default Navigation;

const StyledNavigation = styled.nav`
  display: flex;
`;

const StyledLink = styled.a`
  margin-left: 10px;
  font-size: 18px;
  &:hover {
    color: ${(p) => (p.scrolled ? color.primary : color.yellow)};
  }
`;

const SubLinkWrapper = styled.div`
  position: relative;
  &:hover > ul {
    display: block;
  }
`;

const SubLink = styled.ul`
  display: none;
  position: absolute;
  padding: 8px;
  background-color: ${color.backgroundColor};
  border-radius: 6px;
  width: 100%;
`;

const SubLinkItem = styled.li`
  margin: 12px 0;
  &:hover {
    display: block;
  }
`;
