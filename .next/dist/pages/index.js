'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index(props) {
  return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h1', {
    className: 'jsx-2987328901'
  }, 'Batman TV Shows'), _react2.default.createElement('ul', {
    className: 'jsx-2987328901'
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return _react2.default.createElement('li', { key: show.id, className: 'jsx-2987328901'
    }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id }, _react2.default.createElement('a', {
      className: 'jsx-2987328901'
    }, show.name)));
  })), _react2.default.createElement(_style2.default, {
    styleId: '2987328901',
    css: ['h1.jsx-2987328901,a.jsx-2987328901{font-family:"Arial";}', 'ul.jsx-2987328901{padding:0;}', 'li.jsx-2987328901{list-style:none;margin:5px 0;}', 'a.jsx-2987328901{text-decoration:none;color:blue;}', 'a.jsx-2987328901:hover{opacity:0.6;}']
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log('Show data fetched. Count: ' + data.length);

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;