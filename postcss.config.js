const postcssEasyImport = require('postcss-easy-import')({ prefix: '_' });
const autoprefixer = require('autoprefixer')({ /* ...options */ });

module.exports = {
  plugins: [
    postcssEasyImport,
    autoprefixer,
  ],
};
