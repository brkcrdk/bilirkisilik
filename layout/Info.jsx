import styled from 'styled-components';
import { Container, ContactButton } from 'components';
import { color } from 'theme';
import SocialButtons from './SocialButtons';
import contactData from 'data/contact.json';

const Info = () => (
  <StyledInfo>
    <InfoContent>
      <ContactButtons>
        {contactData?.map((data) => (
          <ContactButton
            key={data.name}
            name={data.name}
            link={data.link}
            icon={data.icon}
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
  border-bottom: 1px solid ${color.text300};
`;

const InfoContent = styled(Container)`
  padding: 25px 0;
  color: ${color.text300};
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const ContactButtons = styled.div``;
