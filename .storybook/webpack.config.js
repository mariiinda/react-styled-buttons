module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.m?js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader"
    }
  });

  return config;
};
