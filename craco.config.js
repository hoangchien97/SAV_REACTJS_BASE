/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "./src/styles/scss/_variables.scss";
          @import "./src/styles/scss/_mixins.scss";
          @import "./src/styles/scss/_reset.scss";
          @import "./src/styles/scss/index.scss";
        `,
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@constants': path.resolve(__dirname, 'src/constants'),
    },
  },
};
