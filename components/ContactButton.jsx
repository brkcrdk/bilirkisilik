import styled from 'styled-components';
import CustomLink from './CustomLink';

const ContactButton = ({ icon, name, link, label }) => (
  <StyledContactButton
    href={link}
    alt={name}
    title={name}
    target="_blank"
    rel="noopener noreferrer"
  >
    <ContactIcon className={icon} hasLabel={label} />
    {label && <ContactLabel>{label}</ContactLabel>}
  </StyledContactButton>
);

export default ContactButton;

const StyledContactButton = styled(CustomLink)`
  margin: 0 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ContactIcon = styled.i`
  margin-right: ${(p) => p.hasLabel && '8px'};
`;
const ContactLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
`;
