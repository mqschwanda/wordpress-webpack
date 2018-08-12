import CopyWebpackPlugin from 'copy-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export const THEME_NAME = 'custom-theme';
export const context = path.resolve(__dirname, '..', '..');

export const joinContext = (...args) => path.join(context, ...args);

const recursiveIssuer = (m) => {
  if (m.issuer) return recursiveIssuer(m.issuer);
  else if (m.name) return m.name;

  return false;
};

const miniCssExtract = new MiniCssExtractPlugin({
  filename: 'stylesheets/[name].css',
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
    filename: 'javascripts/[name].js',
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
    rules: [{
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
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', // translates CSS into CommonJS
      ],
    }, {
      test: /\.sass$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS
      ],
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
    miniCssExtract,
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        index: {
          name: 'index',
          test: (m, c, entry = 'index') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        editor: {
          name: 'editor',
          test: (m, c, entry = 'editor') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
