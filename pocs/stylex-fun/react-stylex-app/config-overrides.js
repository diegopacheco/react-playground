const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    "@stylexjs/babel-plugin",
    {
      dev: true,
      test: false,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: __dirname,
      },
    },
  ])
);