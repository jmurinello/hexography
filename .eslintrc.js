module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  rules: {
    'semi': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.prod.js',
      },
    },
  },
};
