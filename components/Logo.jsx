import styled from 'styled-components';
import Link from 'next/link';

const Logo = ({ lightLogo, width = 200 }) => (
  <Link href="/" passHref>
    <a title="Logo" alt="logo">
      <StyledLogo
        src={`/images/${lightLogo ? 'light-logo' : 'logo'}.png`}
        width={width}
      />
    </a>
  </Link>
);
export default Logo;

const StyledLogo = styled.img`
  transition: all 0.3s ease-in-out;
`;