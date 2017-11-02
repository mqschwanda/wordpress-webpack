const DashboardPlugin = require('webpack-dashboard/plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const { compiler } = require('../webpack.config.js');
const { THEME_NAME } = require('../webpack.config.js');
const { join } = require('path');

compiler.context = join(__dirname, '../');
compiler.devtool = 'eval-source-map';
compiler.plugins.push(new DashboardPlugin());
compiler.plugins.push(new OpenBrowserPlugin({ url: 'http://localhost:3000' }));

const proxyConfig = {
  target: {
    host: 'localhost',
    protocol: 'http:',
    port: 8888,
  },
  ignorePath: false,
  changeOrigin: true,
  secure: false,
};
compiler.devServer = {
  contentBase: `./wordpress/wp-content/themes/${THEME_NAME}/assets`,
  outputPath: join(__dirname, `../wordpress/wp-content/themes/${THEME_NAME}/assets`),
  proxy: {
    '/': proxyConfig,
    '**': proxyConfig,
  },
};

module.exports = compiler;
