import styled from 'styled-components';
import socialData from 'data/social.json';
import { ContactButton } from 'components';

const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      {socialData.map((social) => (
        <ContactButton
          key={social.name}
          name={social.name}
          icon={social.icon}
          link={social.link}
        />
      ))}
    </StyledSocialButtons>
  );
};

export default SocialButtons;

const StyledSocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
