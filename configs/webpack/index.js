// import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export const THEME_NAME = 'custom-theme';
export const context = path.resolve(__dirname, '..', '..');

export const joinContext = (...args) => path.join(context, ...args);

const extractStyle = new ExtractTextPlugin({
  filename: getPath => getPath('../style.css'),
});

const copyWebpack = new CopyWebpackPlugin([{
  context: joinContext(THEME_NAME, 'wp-content'),
  from: './**/*',
  to: '../',
}], {
  ignore: ['./stylesheets', './javascripts', './index.js'],
});

const writeFile = new WriteFilePlugin();


export const compiler = {
  context,
  entry: {
    index: joinContext(
      THEME_NAME,
      'imports',
      'startup',
      'client',
      'index.js',
    ),
    editor: joinContext(
      THEME_NAME,
      'imports',
      'startup',
      'client',
      'editor.js',
    ),
    customizer: joinContext(
      THEME_NAME,
      'imports',
      'startup',
      'client',
      'customizer.js',
    ),
  },
  output: {
    filename: 'bundles/[name].js',
    path: joinContext(
      'wordpress',
      'wp-content',
      'themes',
      THEME_NAME,
      'assets',
    ),
    publicPath: `/wp-content/themes/${THEME_NAME}/assets`,
  },
  resolve: {
    alias: {
      imports: joinContext(THEME_NAME, 'imports'),
      modules: joinContext(THEME_NAME, 'imports', 'modules'),
      reducers: joinContext(THEME_NAME, 'imports', 'reducers'),
      ui: joinContext(THEME_NAME, 'imports', 'ui'),
      components: joinContext(THEME_NAME, 'imports', 'ui', 'components'),
      containers: joinContext(THEME_NAME, 'imports', 'ui', 'containers'),
      icons: joinContext(THEME_NAME, 'imports', 'ui', 'icons'),
      layouts: joinContext(THEME_NAME, 'imports', 'ui', 'layouts'),
      pages: joinContext(THEME_NAME, 'imports', 'ui', 'pages'),
      providers: joinContext(THEME_NAME, 'imports', 'ui', 'providers'),
      stylesheets: joinContext(THEME_NAME, 'imports', 'ui', 'stylesheets'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    }, { // react icons
      test: /react-icons\/(.)*.(js|jsx)?$/,
      use: [{
        loader: 'babel-loader',
      }],
    }, {
      test: /\.css$/,
      use: extractStyle.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
        ],
      }),
    }, {
      test: /\.sass$/,
      use: extractStyle.extract({
        fallback: 'style-loader',
        use: [
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ],
      }),
    }, {
      test: /\.(ttf|eot|otf|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      }],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'url-loader?limit=10000',
        'img-loader',
      ],
    }],
  },
  plugins: [
    copyWebpack,
    writeFile,
    extractStyle,
  ],
};
