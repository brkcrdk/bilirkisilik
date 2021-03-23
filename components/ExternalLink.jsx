import styled from 'styled-components';
import { color, theme } from 'theme';
const ExternalLink = ({ icon, name, link, label }) => (
  <StyledExternalLink
    href={link}
    alt={name}
    title={name}
    target="_blank"
    rel="noopener noreferrer"
  >
    <ContactIcon className={icon} hasLabel={label} />
    {label && <ContactLabel>{label}</ContactLabel>}
  </StyledExternalLink>
);

export default ExternalLink;

const StyledExternalLink = styled.a`
  margin: 0 10px;
  font-size: ${theme.font20};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${color.backgroundColor};
`;

const ContactIcon = styled.i`
  margin-right: ${(p) => p.hasLabel && '8px'};
`;
const ContactLabel = styled.label`
  font-size: ${theme.font16};
  font-weight: 400;
`;
