# @semantic-release/error

Error type used by all [semantic-release](https://github.com/semantic-release/semantic-release) packages.

Errors of type `SemanticReleaseError` or an inherited type will be considered by [semantic-release](https://github.com/semantic-release/semantic-release) as an expected exception case (no release to be done, running on a PR etc..). That indicate to the `semantic-release` process to stop and exit with the `0` success code.

Any other type of error will be considered by [semantic-release](https://github.com/semantic-release/semantic-release) as an unexpected error (i/o issue, code problem etc...). That indicate to the `semantic-release` process to stop, log the error and exit with the `1` failure code.

[![npm](https://img.shields.io/npm/v/@semantic-release/error.svg)](https://www.npmjs.com/package/@semantic-release/error)
[![Greenkeeper badge](https://badges.greenkeeper.io/semantic-release/error.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/semantic-release/error.svg)](https://github.com/semantic-release/error/blob/master/LICENSE)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Travis](https://img.shields.io/travis/semantic-release/error.svg)](https://travis-ci.org/semantic-release/error)
[![Codecov](https://img.shields.io/codecov/c/github/semantic-release/error.svg)](https://codecov.io/gh/semantic-release/error)

## Usage

```js
const SemanticReleaseError = require('@semantic-release/error');

// Default
throw new SemanticReleaseError();

// With error message
throw new SemanticReleaseError('An error happened');

// With error message and error code
throw new SemanticReleaseError('An error happened', 'ECODE');

// With inheritance
class InheritedError extends SemanticReleaseError {
  constructor(message, code, newProperty) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code;
    this.newProperty = 'newProperty';
  }
}

throw new InheritedError('An error happened', 'ECODE');
```
