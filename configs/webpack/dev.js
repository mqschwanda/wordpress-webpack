import DashboardPlugin from 'webpack-dashboard/plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import { compiler, THEME_NAME } from './';

compiler.devtool = 'eval-source-map';
compiler.mode = 'development';

const dashboard = new DashboardPlugin();

const openBrowser = new OpenBrowserPlugin({
  url: 'http://localhost:3000',
});

compiler.plugins = [
  ...compiler.plugins,
  dashboard,
  openBrowser,
];

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
  // outputPath: joinContext(
  //   'wordpress',
  //   'wp-content',
  //   'themes',
  //   THEME_NAME,
  //   'assets',
  // ),
  proxy: {
    '/': proxyConfig,
    '**': proxyConfig,
  },
};

export default compiler;
