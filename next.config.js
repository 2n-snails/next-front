const path = require("path");

const withImages = require("next-images");
module.exports = withImages({
  exclude: path.resolve(__dirname, "public/static/"),
  webpack(config) {
    return config;
  },
});

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};
