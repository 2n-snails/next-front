/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src/"),
    };

    config.module.rules.push({
      // 웹팩설정에 로더 추가함
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
