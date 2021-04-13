import { useContext } from 'react';
import { ExternalLink } from 'components';
import styled from 'styled-components';
import { SettingsContext } from 'context';

const SocialButtons = ({ ...props }) => {
  const { settings } = useContext(SettingsContext);
  const socialData = [
    {
      name: 'Twitter',
      icon: 'icon-twitter',
      link: settings?.twitter,
    },
    {
      name: 'Facebook',
      icon: 'icon-facebook',
      link: settings?.facebook,
    },
    {
      name: 'Instagram',
      icon: 'icon-instagram',
      link: settings?.instagram,
    },
  ];
  return (
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
};
export default SocialButtons;

const StyledSocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
