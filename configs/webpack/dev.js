import DashboardPlugin from 'webpack-dashboard/plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import { join } from 'path';
import { compiler, THEME_NAME } from './';

compiler.context = join(__dirname, '../../');
compiler.devtool = 'eval-source-map';
compiler.plugins = [
  ...compiler.plugins,
  new DashboardPlugin(),
  new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
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
  outputPath: join(__dirname, `../../wordpress/wp-content/themes/${THEME_NAME}/assets`),
  proxy: {
    '/': proxyConfig,
    '**': proxyConfig,
  },
};

export default compiler;
