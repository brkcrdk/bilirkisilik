import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device, color, theme } from 'theme';
import { useSidebar } from 'hooks';

const Hamburger = ({ burgerColor, size = 0.9 }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const delay = isSidebarOpen ? 0 : 0.7;
  return (
    <StyledHamburger
      onClick={toggleSidebar}
      burgerColor={burgerColor}
      size={size}
      className="hamburger-btn"
    >
      <motion.span
        animate={isSidebarOpen ? { rotate: -45, y: 4 } : { rotate: 0, y: 14 }}
        transition={{ duration: 0.3, delay }}
      />
      <motion.span
        animate={isSidebarOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, delay }}
      />
      <motion.span
        animate={isSidebarOpen ? { rotate: 45, y: -4 } : { rotate: 0, y: -14 }}
        transition={{ duration: 0.3, delay }}
      />
    </StyledHamburger>
  );
};

export default Hamburger;

const StyledHamburger = styled.button`
  display: none;
  @media ${device.laptop} {
    display: grid;
  }
  transform: ${(p) => `scale(${p.size})`};
  transition: all 0.3s ease-in-out;
  @media ${device.phone} {
    transform: scale(0.7);
  }
  span {
    width: 40px;
    height: 4px;
    background: ${(p) =>
      p.burgerColor ? p.burgerColor : color.backgroundColor};
    border-radius: ${theme.borderRadius};
  }
`;
