import webpack from 'webpack';
import { compiler } from './';

compiler.devtool = 'source-map';
compiler.plugins = [
  ...compiler.plugins,
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: false,
    output: { comments: false },
  }),
];

export default compiler;
