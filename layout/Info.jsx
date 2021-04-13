import styled from 'styled-components';
import { Container, ContactButtons, SocialButtons } from 'components';
import { color, device } from 'theme';

const Info = ({ scrolled, infoData }) => (
  <StyledInfo scrolled={scrolled}>
    <InfoContent>
      <ContactButtons contactData={infoData.contactData} />
      <SocialButtons socialData={infoData.socialData} />
    </InfoContent>
  </StyledInfo>
);

export default Info;

const StyledInfo = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.backgroundColor};
  opacity: ${(p) => (p.scrolled ? 0 : 1)};
  @media ${device.phone} {
    display: none;
  }
`;

const InfoContent = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  @media ${device.phone} {
    .social-btns {
      display: none;
    }
    .contact-btns {
      justify-content: space-between;
      width: 100%;
    }
  }
`;
