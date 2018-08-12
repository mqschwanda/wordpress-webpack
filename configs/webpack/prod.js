import webpack from 'webpack';
import { compiler } from './';

const { DedupePlugin, UglifyJsPlugin } = webpack.optimize;

const dedupe = new DedupePlugin();

const uglify = new UglifyJsPlugin({
  minimize: true,
  sourceMap: false,
  output: {
    comments: false,
  },
});

compiler.devtool = 'source-map';
compiler.mode = 'production';


compiler.plugins = [
  ...compiler.plugins,
  dedupe,
  uglify,
];

export default compiler;
