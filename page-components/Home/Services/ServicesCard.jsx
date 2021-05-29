import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color, device, sizes, theme } from 'theme';
import { CustomLink } from 'components';
import { useWindowWidth } from 'hooks';

const ServicesCard = ({ title, description, route, background }) => {
  const [hovered, setHovered] = useState(false);
  const { windowWidth } = useWindowWidth();
  const isLaptop = windowWidth <= sizes.laptop;

  const contentAnimations = {
    hidden: {
      height: isLaptop ? '55%' : 50,
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
    },
    hovered: {
      height: '55%',
      borderRadius: theme.borderRadius,
      // borderTopLeftRadius: theme.borderRadius,
      // borderTopRightRadius: theme.borderRadius,
    },
  };

  const paragraphAnimations = {
    hidden: { opacity: isLaptop ? 1 : 0 },
    hovered: { opacity: 1 },
  };

  return (
    <StyledServicesCard
      background={background}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Content
        variants={contentAnimations}
        initial="hidden"
        animate={hovered ? 'hovered' : 'hidden'}
        transition={{ duration: 0.2, type: 'tween' }}
      >
        <CustomLink route={route}>
          <h3 alt={title} title={title}>
            {title}
          </h3>
        </CustomLink>
        <motion.p
          variants={paragraphAnimations}
          initial="hidden"
          animate={hovered ? 'show' : 'hidden'}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        <DetailLink route={route} alt={title} title={title}>
          Detaylı Gör
        </DetailLink>
      </Content>
    </StyledServicesCard>
  );
};
export default ServicesCard;

const StyledServicesCard = styled.article`
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
  width: calc(100% + 1px);
  position: absolute;
  left: -0.5px;
  bottom: 0;
  padding: 12px;
  transition: ${theme.transition};
  color: ${color.primary};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: ${theme.font18};
  }
  p {
    ${theme.lineClamp(3)}
    margin: 12px 0;
    color: ${color.secondary};
    font-size: ${theme.font14};
  }
`;

const DetailLink = styled(CustomLink)`
  border: 1px solid ${color.primary};
  padding: 8px;
  border-radius: ${theme.borderRadius};
  font-size: ${theme.font14};
  width: 72px;
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
