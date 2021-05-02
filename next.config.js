const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    mode: 'production',
  },
  future: {
    webpack5: true,
  },
});
