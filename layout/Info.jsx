import styled from 'styled-components';
import { Container, ContactButton } from 'components';
import { color } from 'theme';
import SocialButtons from './SocialButtons';
import contactData from 'data/contact.json';

const Info = ({ scrolled }) => (
  <StyledInfo scrolled={scrolled}>
    <InfoContent>
      <ContactButtons>
        {contactData?.map((data) => (
          <ContactButton
            key={data.name}
            name={data.name}
            link={data.link}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </ContactButtons>
      <SocialButtons />
    </InfoContent>
  </StyledInfo>
);

export default Info;

const StyledInfo = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.backgroundColor};
  opacity: ${(p) => (p.scrolled ? 0 : 1)};
`;

const InfoContent = styled(Container)`
  padding-top: 25px;
  padding-bottom: 25px;
  color: ${color.text300};
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const ContactButtons = styled.div`
  display: flex;
`;
