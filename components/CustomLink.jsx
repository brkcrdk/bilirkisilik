import Link from 'next/link';
import styled from 'styled-components';

const CustomLink = ({ children, href = '' }) => (
  <Link href={href} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
);
export default CustomLink;

const StyledLink = styled.a``;
