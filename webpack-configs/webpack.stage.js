const { compiler } = require('../webpack.config.js');

compiler.devtool = 'eval-source-map';

module.exports = compiler;
