export const color = {
  primary: '#222831',
  secondary: '#393e46',
  yellow: '#ffd369',
  red: '#ef4f4f',
  text: '#696969',
  backgroundColor: '#eeeeee',
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
