import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device, color } from 'theme';
import { useSidebar } from 'hooks';

const Hamburger = ({ burgerColor, size = 0.9 }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <StyledHamburger
      onClick={() => toggleSidebar()}
      burgerColor={burgerColor}
      size={size}
      className="hamburger-btn"
    >
      <motion.span
        animate={isSidebarOpen ? { rotate: -45, y: 14 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={isSidebarOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={isSidebarOpen ? { rotate: 45, y: -10 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
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
    margin: 4px 0;
    border-radius: 6px;
  }
`;