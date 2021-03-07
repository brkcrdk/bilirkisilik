import styled from 'styled-components';

const ContactButton = ({ icon, name, link }) => (
  <StyledContactButton
    href={link}
    alt={name}
    title={name}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={icon} />
  </StyledContactButton>
);

export default ContactButton;

const StyledContactButton = styled.a`
  margin: 0 10px;
  font-size: 20px;
`;
