import styled from 'styled-components';
import { ContactButtons, SocialButtons } from 'components';
import { device, color } from 'theme';
const InfoSection = ({ infoData }) => (
  <StyledInfoSection>
    <ContactButtons contactData={infoData.contactData} />
    <SocialButtons socialData={infoData.socialData} />
  </StyledInfoSection>
);
export default InfoSection;

const StyledInfoSection = styled.div`
  a {
    color: ${color.primary};
  }
  label {
    font-weight: 700;
  }
  margin-bottom: 20px;
  .contact-btns {
    margin-bottom: 20px;
    @media ${device.mini} {
      flex-direction: column;
      a {
        margin: 5px 0;
      }
    }
  }
`;
