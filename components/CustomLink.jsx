import styled from 'styled-components';
import Link from 'next/link';

const CustomLink = ({ children, route = '/', ...props }) => (
  <Link href={route} passHref>
    <StyledLink {...props}>{children}</StyledLink>
  </Link>
);
export default CustomLink;

const StyledLink = styled.a``;
