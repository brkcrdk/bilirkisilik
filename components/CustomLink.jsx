import styled from 'styled-components';

const CustomLink = ({ children, ...props }) => (
  <StyledCustomLink {...props}>{children}</StyledCustomLink>
);

export default CustomLink;

const StyledCustomLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: unset;
  * {
    cursor: pointer;
  }
`;
