import { ExternalLink } from 'components';
import styled from 'styled-components';
import socialData from 'data/social.json';

const SocialButtons = () => (
  <StyledSocialButtons className="social-btns">
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
