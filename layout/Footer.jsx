import styled from 'styled-components';
import { Container, Logo, Map, ContactButtons, CustomLink } from 'components';
import { color, theme, device } from 'theme';
import footerNavigation from 'data/footerNavigation.json';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterLogoSection>
          <div>
            <Logo />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <CustomContacts />
        </FooterLogoSection>
        <FooterNavigationSection>
          <h2>Sayfalar</h2>
          <FooterNavigation>
            {footerNavigation.map((item) => (
              <li key={item.label}>
                <CustomLink
                  route={item.route}
                  alt={item.label}
                  title={item.label}
                >
                  {item.label}
                </CustomLink>
              </li>
            ))}
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
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  padding: 36px;
  display: grid;
  grid-template-columns: 3fr 4fr 5fr;
  column-gap: 12px;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 48px;
    padding: 24px;

    iframe {
      grid-column: 1/3;
    }
  }
  @media ${device.phone} {
    grid-template-columns: 1fr;
    padding: 24px 18px;

    iframe {
      grid-column: initial;
    }
  }
`;

const FooterLogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    margin-top: 12px;
    color: ${color.primary};
  }
`;

const FooterNavigationSection = styled.nav`
  h2 {
    font-size: ${theme.font24};
    color: ${color.primary};
    font-weight: 600;
  }
  li {
    font-size: ${theme.font18};
    margin-bottom: 12px;
    color: ${color.text400};
  }
  @media ${device.laptop} {
    text-align: center;
  }
`;
const FooterNavigation = styled.ul`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  a:hover {
    color: ${color.primary};
  }
  @media ${device.phone} {
    grid-template-columns: 1fr;
  }
`;

const CustomContacts = styled(ContactButtons)`
  display: grid;
  row-gap: 12px;
  margin-top: 32px;
  i,
  label {
    color: ${color.primary};
  }
`;
