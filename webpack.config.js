const Path = require('path');

const config = {
  entry: {
    main: Path.join(__dirname, "frontend", "index.js")
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  }
};

module.exports = config;
