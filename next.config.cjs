// next.config.js
module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.stats = {
        warningsFilter: (warning) => {
          // Filter out the specific warning related to Fast Refresh
          return /Fast refresh only works/.test(warning.message);
        },
      };
    }
    return config;
  },
};
