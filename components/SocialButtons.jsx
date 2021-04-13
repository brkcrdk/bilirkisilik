import { ExternalLink } from 'components';
import styled from 'styled-components';

const SocialButtons = ({ socialData, ...props }) => (
  <StyledSocialButtons className="social-btns" {...props}>
    {socialData?.map((data) => (
      <ExternalLink
        key={data.name}
        name={data.name}
        link={data.link}
        icon={data.icon}
        label={data.label}
      />
    ))}
  </StyledSocialButtons>
);
export default SocialButtons;

const StyledSocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
