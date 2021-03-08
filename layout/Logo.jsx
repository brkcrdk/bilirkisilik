import styled from 'styled-components';

const Logo = ({ lightLogo, width = 200 }) => (
  <StyledLogo
    src={`/images/${lightLogo ? 'light-logo' : 'logo'}.png`}
    width={width}
  />
);
export default Logo;

const StyledLogo = styled.img``;
