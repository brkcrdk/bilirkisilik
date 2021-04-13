import { useContext } from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'components';
import { SettingsContext } from 'context';
const ContactButtons = ({ ...props }) => {
  const { settings } = useContext(SettingsContext);
  const contactData = [
    {
      name: 'Mail',
      icon: 'icon-mail',
      link: `mailto:${settings?.email}`,
      label: settings?.email,
    },
    {
      name: 'Phone',
      icon: 'icon-phone',
      link: `tel:${settings?.phoneNumber}`,
      label: settings?.phoneNumber,
    },
  ];
  return (
    <StyledContactButtons className="contact-btns" {...props}>
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
};
export default ContactButtons;

const StyledContactButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
