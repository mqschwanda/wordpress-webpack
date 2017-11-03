import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import path from 'path';

export const THEME_NAME = 'custom-theme';
export const context = path.resolve(__dirname, '../../');

const appendAppDirname = uri => path.join(context, uri);

export const compiler = {
  context,
  entry: {
    index: appendAppDirname(`${THEME_NAME}/imports/startup/client/index.js`),
    editor: appendAppDirname(`${THEME_NAME}/imports/startup/client/editor.js`),
    customizer: appendAppDirname(`${THEME_NAME}/imports/startup/client/customizer.js`),
  },
  output: {
    filename: 'bundles/[name].js',
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
      stylesheets: appendAppDirname(`${THEME_NAME}/imports/ui/stylesheets`),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      }, { // react icons
        test: /react-icons\/(.)*.(js|jsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
            },
          },
        ],
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top',
            }, // insert style elements at the beginning of the `<head>`
          }, {
            loader: 'css-loader',
          },
        ],
      }, {
        test: /\.(ttf|eot|otf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: appendAppDirname(`${THEME_NAME}/wp-content`),
        from: './**/*',
        to: '../',
      },
    ], {
      ignore: ['./stylesheets', './javascripts', './index.js'],
    }),
    new WriteFilePlugin(),
  ],
};
