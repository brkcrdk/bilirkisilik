import styled from 'styled-components';
import { color } from 'theme';

const Dropdown = ({ title, isCloseToCorner, children }) => (
  <StyledDropdown>
    <span>{title}</span>
    <DropdownContainer isCloseToCorner={isCloseToCorner}>
      <DropdownContent>{children}</DropdownContent>
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
  right: ${(p) => p.isCloseToCorner && '75px'};

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
  max-width: 200px;
  min-width: 100px;
  overflow: hidden;
  border-radius: 6px;
  padding: 10px;
  margin-top: 24px;
  a {
    color: ${color.text600};
    white-space: nowrap;
    margin: 8px 0;
    font-weight: 400;

    &:hover {
      color: ${color.primary};
    }
  }
`;
