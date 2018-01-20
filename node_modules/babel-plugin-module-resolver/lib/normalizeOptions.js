'use strict';

exports.__esModule = true;
exports.default = normalizeOptions;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _findBabelConfig = require('find-babel-config');

var _findBabelConfig2 = _interopRequireDefault(_findBabelConfig);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _pkgUp = require('pkg-up');

var _pkgUp2 = _interopRequireDefault(_pkgUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultExtensions = ['.js', '.jsx', '.es', '.es6', '.mjs'];

function isRegExp(string) {
  return string.startsWith('^') || string.endsWith('$');
}

function normalizeCwd(opts, file) {
  if (opts.cwd === 'babelrc') {
    var startPath = file.opts.filename === 'unknown' ? './' : file.opts.filename;

    var _findBabelConfig$sync = _findBabelConfig2.default.sync(startPath),
        babelPath = _findBabelConfig$sync.file;

    opts.cwd = babelPath ? _path2.default.dirname(babelPath) : null;
  } else if (opts.cwd === 'packagejson') {
    var _startPath = file.opts.filename === 'unknown' ? './' : file.opts.filename;

    var pkgPath = _pkgUp2.default.sync(_startPath);

    opts.cwd = pkgPath ? _path2.default.dirname(pkgPath) : null;
  }
  if (!opts.cwd) {
    opts.cwd = process.cwd();
  }
}

function normalizeRoot(opts) {
  if (opts.root) {
    if (!Array.isArray(opts.root)) {
      opts.root = [opts.root];
    }
    opts.root = opts.root.map(function (dirPath) {
      return _path2.default.resolve(opts.cwd, dirPath);
    }).reduce(function (resolvedDirs, absDirPath) {
      if (_glob2.default.hasMagic(absDirPath)) {
        var roots = _glob2.default.sync(absDirPath).filter(function (resolvedPath) {
          return _fs2.default.lstatSync(resolvedPath).isDirectory();
        });

        return [].concat(resolvedDirs, roots);
      }

      return [].concat(resolvedDirs, [absDirPath]);
    }, []);
  } else {
    opts.root = [];
  }
}

function getAliasPair(key, value) {
  var parts = value.split('\\\\');

  function substitute(execResult) {
    return parts.map(function (part) {
      return part.replace(/\\\d+/g, function (number) {
        return execResult[number.slice(1)] || '';
      });
    }).join('\\');
  }

  return [new RegExp(key), substitute];
}

function normalizeAlias(opts) {
  if (opts.alias) {
    var alias = opts.alias;

    var aliasKeys = Object.keys(alias);

    opts.alias = aliasKeys.map(function (key) {
      return isRegExp(key) ? getAliasPair(key, alias[key]) : getAliasPair(`^${key}(/.*|)$`, `${alias[key]}\\1`);
    });
  } else {
    opts.alias = [];
  }
}

function normalizeOptions(opts, file) {
  normalizeCwd(opts, file); // This has to go first because other options rely on cwd
  normalizeRoot(opts);
  normalizeAlias(opts);

  if (!opts.extensions) {
    opts.extensions = defaultExtensions;
  }
}