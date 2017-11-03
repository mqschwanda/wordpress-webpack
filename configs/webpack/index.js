import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import path from 'path';

const appendAppDirname = uri => path.join(path.resolve(__dirname, '../../'), uri);

export const THEME_NAME = 'custom-theme';


export const compiler = {
  entry: {
    index: appendAppDirname(`${THEME_NAME}/imports/startup/client/index.js`),
  },
  output: {
    filename: 'bundle/[name].js',
    path: appendAppDirname(`/wordpress/wp-content/themes/${THEME_NAME}/assets`),
    publicPath: `/wp-content/themes/${THEME_NAME}/assets`,
  },
  resolve: {
    alias: {
      imports: appendAppDirname(`${THEME_NAME}/imports`),
      modules: appendAppDirname(`${THEME_NAME}/imports/modules`),
      reducers: appendAppDirname(`${THEME_NAME}/imports/reducers`),
      ui: appendAppDirname(`${THEME_NAME}/imports/ui`),
      components: appendAppDirname(`${THEME_NAME}/imports/ui/components`),
      containers: appendAppDirname(`${THEME_NAME}/imports/ui/containers`),
      icons: appendAppDirname(`${THEME_NAME}/imports/ui/icons`),
      layouts: appendAppDirname(`${THEME_NAME}/imports/ui/layouts`),
    },
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=10000',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }],
  },
  plugins: [
    new CopyWebpackPlugin([{
      context: appendAppDirname(`${THEME_NAME}/wp-content`),
      from: './**/*',
      to: '../',
    }], {
      ignore: [
        './stylesheets',
        './javascripts',
        './index.js',
      ],
    }),
    new WriteFilePlugin(),
  ],
};
