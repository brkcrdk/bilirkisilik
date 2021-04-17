import { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { theme } from 'theme';
import { SettingsContext } from 'context';

function Logo({ lightLogo, width = 200 }) {
  const {
    settings: { siteLogo, siteLightLogo },
  } = useContext(SettingsContext);
  return (
    <Link href="/" passHref>
      <a title="Logo" alt="logo">
        <StyledLogo
          src={lightLogo ? siteLightLogo?.url : siteLogo?.url}
          width={width}
        />
      </a>
    </Link>
  );
}
export default Logo;

const StyledLogo = styled.img`
  transition: ${theme.transition};
`;
