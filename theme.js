export const color = {
  primary: '#28436b',
  secondary: '#393e46',
  yellow: '#ffd369',
  red: '#ef4f4f',
  text300: '#bdc0c2',
  text400: '#a7abae',
  text500: '#91979a',
  text600: '#7c8286',
  text700: '#666d72',
  text800: '#50585d',
  text900: '#3a4349',
  backgroundColor: '#eeeeee',
  backgroundColor09: 'rgba(238, 238, 238,0.9)',
};

const size = {
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phone: 601,
  mini: 414,
};

export const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(max-width: ${size[cur] - 1}px)`;
  return acc;
}, {});
