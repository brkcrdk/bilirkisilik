import styled from 'styled-components';
import { color, theme } from 'theme';

const Dropdown = ({ title, isCloseToCorner, scrolled, children }) => (
  <StyledDropdown>
    <span>{title}</span>
    <DropdownContainer>
      <DropdownContent isCloseToCorner={isCloseToCorner} scrolled={scrolled}>
        {children}
      </DropdownContent>
    </DropdownContainer>
  </StyledDropdown>
);
export default Dropdown;

const StyledDropdown = styled.div``;
const DropdownContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  @keyframes dropdownFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const DropdownContent = styled.ul`
  display: grid;
  position: absolute;
  background: ${color.backgroundColor};
  min-width: 150px;
  overflow: hidden;
  border-radius: ${theme.borderRadius};
  right: ${(p) => p.isCloseToCorner && '0px'};
  padding: 10px;
  margin-top: ${(p) => (p.scrolled ? '34px' : '24px')};
  box-shadow: ${theme.boxShadow200};
  a {
    color: ${color.primary};
    white-space: nowrap;
    font-weight: 400;
    padding: 8px 6px;
    &:hover {
      color: ${color.backgroundColor};
      background: ${color.primary};
      border-radius: ${theme.borderRadius};
    }
  }
`;
