
const config = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 0,
      preserve: false
    },
    'lost': {}
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins['cssnano'] = {};
}

module.exports = config;
