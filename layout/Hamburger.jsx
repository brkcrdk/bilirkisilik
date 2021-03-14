import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from 'theme';
const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledHamburger onClick={() => setOpen(!open)}>
      <motion.span
        animate={open ? { rotate: -45, y: 14 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={open ? { opacity: 0, x: -40 } : { rotate: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={open ? { rotate: 45, y: -10 } : { rotate: 0 }}
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
  span {
    width: 40px;
    height: 4px;
    background: #fff;
    margin: 4px 0;
    border-radius: 6px;
  }
`;
