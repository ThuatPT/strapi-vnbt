// path: config/webpack.config.js

const webpack = require('webpack');

module.exports = (config) => {
  if (!config.resolve) {
    config.resolve = {};
  }

  if (!config.resolve.fallback) {
    config.resolve.fallback = {};
  }

  // Thêm polyfill cho module 'path'
  config.resolve.fallback.path = require.resolve('path-browserify');

  // Cài đặt plugin ProvidePlugin để cung cấp global variables cho các module
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
