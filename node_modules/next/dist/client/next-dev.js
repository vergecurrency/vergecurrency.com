'use strict';

require('react-hot-loader/patch');

var _stripAnsi = require('strip-ansi');

var _stripAnsi2 = _interopRequireDefault(_stripAnsi);

var _ = require('./');

var next = _interopRequireWildcard(_);

var _errorDebug = require('../lib/error-debug');

var _errorDebug2 = _interopRequireDefault(_errorDebug);

var _onDemandEntriesClient = require('./on-demand-entries-client');

var _onDemandEntriesClient2 = _interopRequireDefault(_onDemandEntriesClient);

var _webpackHotMiddlewareClient = require('./webpack-hot-middleware-client');

var _webpackHotMiddlewareClient2 = _interopRequireDefault(_webpackHotMiddlewareClient);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.next = next;

(0, next.default)({ ErrorDebugComponent: _errorDebug2.default, stripAnsi: _stripAnsi2.default }).then(function (emitter) {
  (0, _onDemandEntriesClient2.default)();
  (0, _webpackHotMiddlewareClient2.default)();

  var lastScroll = void 0;

  emitter.on('before-reactdom-render', function (_ref) {
    var Component = _ref.Component,
        ErrorComponent = _ref.ErrorComponent;

    // Remember scroll when ErrorComponent is being rendered to later restore it
    if (!lastScroll && Component === ErrorComponent) {
      var _window = window,
          pageXOffset = _window.pageXOffset,
          pageYOffset = _window.pageYOffset;

      lastScroll = {
        x: pageXOffset,
        y: pageYOffset
      };
    }
  });

  emitter.on('after-reactdom-render', function (_ref2) {
    var Component = _ref2.Component,
        ErrorComponent = _ref2.ErrorComponent;

    if (lastScroll && Component !== ErrorComponent) {
      // Restore scroll after ErrorComponent was replaced with a page component by HMR
      var _lastScroll = lastScroll,
          x = _lastScroll.x,
          y = _lastScroll.y;

      window.scroll(x, y);
      lastScroll = null;
    }
  });
}).catch(function (err) {
  console.error((0, _stripAnsi2.default)(err.message + '\n' + err.stack));
});