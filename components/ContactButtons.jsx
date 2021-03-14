import styled from 'styled-components';
import { ExternalLink } from 'components';
import contactData from 'data/contact.json';

const ContactButtons = () => (
  <StyledContactButtons className="contact-btns">
    {contactData?.map((data) => (
      <ExternalLink
        key={data.name}
        name={data.name}
        link={data.link}
        icon={data.icon}
        label={data.label}
      />
    ))}
  </StyledContactButtons>
);
export default ContactButtons;

const StyledContactButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
