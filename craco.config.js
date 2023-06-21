module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Modify the devtool option
        webpackConfig.devtool = 'source-map';
  
        return webpackConfig;
      },
    },
  };
  