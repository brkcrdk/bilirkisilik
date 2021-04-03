import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color, device, sizes, theme } from 'theme';
import { CustomLink } from 'components';
import { useWindowWidth } from 'hooks';

const ServicesCard = () => {
  const [hovered, setHovered] = useState(false);
  const { windowWidth } = useWindowWidth();
  const isTablet = windowWidth <= sizes.laptop;

  return (
    <StyledServicesCard
      background="/images/slider-placeholder/2.jpg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Content
        initial={{
          height: isTablet ? 150 : 40,
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        }}
        animate={
          hovered
            ? {
                height: 150,
                borderTopLeftRadius: theme.borderRadius,
                borderTopRightRadius: theme.borderRadius,
              }
            : {
                height: isTablet ? 150 : 40,
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
              }
        }
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <h5>Görüntü ve Ses İnceleme</h5>
        <motion.p
          initial={{ opacity: isTablet ? 1 : 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: isTablet ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the is simply dummy text of the
          printing.
        </motion.p>
        <DetailLink route="/">Detaylı Gör</DetailLink>
      </Content>
    </StyledServicesCard>
  );
};
export default ServicesCard;

const StyledServicesCard = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius};
  border: 1px solid ${color.backgroundColor};
  background-image: ${(p) => p.background && `url(${p.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;

  @media ${device.laptop} {
    box-shadow: ${theme.boxShadow200};
  }
  &:hover {
    box-shadow: ${theme.boxShadow400};
  }
`;

const Content = styled(motion.header)`
  background: ${color.backgroundColor};
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 12px;
  transition: ${theme.transition};
  color: ${color.primary};
  overflow: hidden;
  h5 {
    font-size: ${theme.font18};
  }
  p {
    margin: 12px 0;
    color: ${color.secondary};
    font-size: ${theme.font14};
  }
`;

const DetailLink = styled(CustomLink)`
  border: 1px solid ${color.primary};
  padding: 4px 8px;
  border-radius: ${theme.borderRadius};
  font-size: ${theme.font14};
  &:hover {
    background: ${color.primary};
    color: ${color.backgroundColor};
  }
  @media ${device.laptop} {
    &:hover {
      background: ${color.backgroundColor};
      border: 1px solid ${color.primary};
      color: ${color.primary};
    }
  }
`;