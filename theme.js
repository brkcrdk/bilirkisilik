export const color = {
  primary: '#28436b',
  secondary: '#393e46',
  yellow: '#ffd369',
  red: '#ef4f4f',
  text200: '#eee',
  text300: '#bdc0c2',
  text400: '#a7abae',
  text500: '#91979a',
  text600: '#7c8286',
  text700: '#666d72',
  text800: '#50585d',
  text900: '#3a4349',
  backgroundColor: '#fcfcfc',
  backgroundColor09: 'rgba(238, 238, 238,0.9)',
};

export const theme = {
  font14: '14px',
  font16: '16px',
  font18: '18px',
  font20: '20px',
  font24: '24px',
  font32: '32px',
  font48: '48px',
  font64: '64px',
  borderRadius: '6px',
  boxShadow400: '0px 4px 16px rgba(40, 67, 107, 0.4)',
  boxShadow200: '0px 4px 16px rgba(40, 67, 107, 0.2)',
  boxShadow150: '0px 4px 16px rgba(40, 67, 107, 0.15)',
  transition: 'all 0.3s ease-in-out',
  lineClamp: (line) => {
    return `display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;  
    overflow: hidden;`;
  },
};

export const sizes = {
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phone: 600,
  mini: 414,
};

export const device = {
  desktop: '(max-width: 1280px)',
  laptop: '(max-width: 1024px)',
  tablet: '(max-width: 768px)',
  phone: '(max-width: 600px)',
  mini: '(max-width: 414px)',
};
