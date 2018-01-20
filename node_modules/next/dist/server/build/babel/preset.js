'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var relativeResolve = require('../root-module-relative-path').default(require);

// Resolve styled-jsx plugins
function styledJsxOptions(opts) {
  if (!opts) {
    return {};
  }

  if (!Array.isArray(opts.plugins)) {
    return opts;
  }

  opts.plugins = opts.plugins.map(function (plugin) {
    if (Array.isArray(plugin)) {
      var _plugin = (0, _slicedToArray3.default)(plugin, 2),
          name = _plugin[0],
          options = _plugin[1];

      return [require.resolve(name), options];
    }

    return require.resolve(plugin);
  });

  return opts;
}

var envPlugins = {
  'development': [require.resolve('babel-plugin-transform-react-jsx-source')],
  'production': [require.resolve('babel-plugin-transform-react-remove-prop-types')]
};

var plugins = envPlugins[process.env.NODE_ENV] || envPlugins['development'];

module.exports = function (context) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    presets: [[require.resolve('babel-preset-env'), (0, _extends3.default)({
      modules: false
    }, opts['preset-env'])], require.resolve('babel-preset-react')],
    plugins: [require.resolve('babel-plugin-react-require'), require.resolve('./plugins/handle-import'), require.resolve('babel-plugin-transform-object-rest-spread'), require.resolve('babel-plugin-transform-class-properties'), [require.resolve('babel-plugin-transform-runtime'), opts['transform-runtime'] || {}], [require.resolve('styled-jsx/babel'), styledJsxOptions(opts['styled-jsx'])]].concat((0, _toConsumableArray3.default)(plugins), [[require.resolve('babel-plugin-module-resolver'), {
      alias: {
        'babel-runtime': relativeResolve('babel-runtime/package'),
        'next/link': relativeResolve('../../../lib/link'),
        'next/prefetch': relativeResolve('../../../lib/prefetch'),
        'next/css': relativeResolve('../../../lib/css'),
        'next/dynamic': relativeResolve('../../../lib/dynamic'),
        'next/head': relativeResolve('../../../lib/head'),
        'next/document': relativeResolve('../../../server/document'),
        'next/router': relativeResolve('../../../lib/router'),
        'next/error': relativeResolve('../../../lib/error')
      }
    }]])
  };
};