// https://plusreturn.com/blog/how-to-configure-a-path-alias-in-a-react-typescript-app-for-cleaner-imports/

const path = require("path");
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
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
};
