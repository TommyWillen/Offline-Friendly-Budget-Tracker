const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: {
    app: './client/assets/js/index.js',
    indexdb: './client/assets/js/db.js',
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: "Offline-Friendly-Budget-Tracker",
      short_name: "Budget Tracker",
      description: "An application that allows you to track your budget transactions both online and offline.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      'theme-color': "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("client/assets/images/icons/icon-512x512.png"),
          sizes: [192, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
};

module.exports = config;