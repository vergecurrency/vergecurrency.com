'use strict';

exports.__esModule = true;
exports.default = transformCall;

var _utils = require('../utils');

var patterns = ['require', 'require.resolve', 'System.import', 'jest.genMockFromModule', 'jest.mock', 'jest.unmock', 'jest.doMock', 'jest.dontMock'];

function transformCall(nodePath, state) {
  var calleePath = nodePath.get('callee');
  var isNormalCall = patterns.some(function (pattern) {
    return (0, _utils.matchesPattern)(state.types, calleePath, pattern);
  });

  if (isNormalCall || (0, _utils.isImportCall)(state.types, nodePath)) {
    (0, _utils.mapPathString)(nodePath.get('arguments.0'), state);
  }
}