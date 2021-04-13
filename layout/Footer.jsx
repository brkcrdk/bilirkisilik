import styled from 'styled-components';
import { Container, Logo, Map, ContactButtons, CustomLink } from 'components';
import { color, theme, device } from 'theme';

const Footer = ({ navigation, contactData }) => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterLogoSection>
          <div>
            <Logo />
          </div>
          <CustomContacts contactData={contactData} />
        </FooterLogoSection>
        <FooterNavigationSection>
          <h2>Sayfalar</h2>
          <FooterNavigation>
            {navigation.map((item) => (
              <li key={item.linkLabel}>
                <CustomLink
                  route={item.linkRoute}
                  alt={item.linkLabel}
                  title={item.linkLabel}
                >
                  {item.linkLabel}
                </CustomLink>
              </li>
            ))}
          </FooterNavigation>
        </FooterNavigationSection>
        <Map className="map" />
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
  box-shadow: ${theme.boxShadow150};
  padding: 36px;
  display: grid;
  grid-template-columns: 3fr 4fr 5fr;
  column-gap: 12px;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 48px;
    padding: 24px;

    .map {
      grid-column: 1/3;
    }
  }
  @media ${device.phone} {
    grid-template-columns: 1fr;
    padding: 24px 18px;

    .map {
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
    color: ${color.text800};
  }
`;

const FooterNavigationSection = styled.nav`
  @media ${device.phone} {
    text-align: center;
  }
  h2 {
    font-size: ${theme.font24};
    color: ${color.primary};
    font-weight: 600;
  }
  li {
    font-size: ${theme.font18};
    margin-bottom: 12px;
    color: ${color.text600};
  }
`;
const FooterNavigation = styled.ul`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 12px;
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
