import styled from 'styled-components';
import { Container, Logo, Map } from 'components';
import { color, theme } from 'theme';
import navigationData from 'data/navigation.json';

const Footer = () => {
  console.log(navigationData);
  return (
    <StyledFooter>
      <FooterContent>
        <FooterLogoSection>
          <Logo />
          <p>Lorem ipsum dolor sit amet,</p>
        </FooterLogoSection>
        <FooterNavigationSection>
          <h2>Menu</h2>
          <FooterNavigation>
            {navigationData.map((item) =>
              item.sublinks ? (
                <ul key={item.label}>
                  <NavigationTitle>{item.label}</NavigationTitle>
                  {item.sublinks.map((sublink) => (
                    <NavigationItem key={sublink.label}>
                      {sublink.label}
                    </NavigationItem>
                  ))}
                </ul>
              ) : (
                <NavigationTitle key={item.label}>{item.label}</NavigationTitle>
              )
            )}
          </FooterNavigation>
        </FooterNavigationSection>
        <Map />
      </FooterContent>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
  padding: 100px 0;
`;

const FooterContent = styled(Container)`
  background: #fff;
  display: flex;
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  padding: 36px;
`;

const FooterLogoSection = styled.div`
  margin-right: 120px;
  p {
    margin-top: 32px;
  }
`;

const FooterNavigationSection = styled.nav`
  width: 100%;
  h2 {
    font-size: ${theme.font24};
  }
`;
const FooterNavigation = styled.ul`
  margin-top: 18px;
  display: flex;
  font-weight: 400;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const NavigationTitle = styled.h4`
  font-size: ${theme.font18};
  margin-bottom: 12px;
`;
const NavigationItem = styled.li`
  font-size: ${theme.font16};
  margin: 4px 0;
`;
