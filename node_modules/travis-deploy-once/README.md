# travis-deploy-once

Run a deployment script only once in the [Travis](https://travis-ci.org/) test matrix.

[![Travis](https://img.shields.io/travis/semantic-release/travis-deploy-once.svg)](https://travis-ci.org/semantic-release/travis-deploy-once)
[![Codecov](https://img.shields.io/codecov/c/github/semantic-release/travis-deploy-once.svg)](https://codecov.io/gh/semantic-release/travis-deploy-once)
[![Greenkeeper badge](https://badges.greenkeeper.io/semantic-release/travis-deploy-once.svg)](https://greenkeeper.io/)

On Travis builds running multiple jobs (to test with multiple [Node versions](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#Specifying-Node.js-versions) and/or [OSs](https://docs.travis-ci.com/user/multi-os/)), run some code from the `after_success` phase only once, after all other jobs have completed successfully.

Your code will run only on the job identified as the build leader, which is determined as follow, by order of priority:
- The job with the ID defined in [BUILD_LEADER_ID](#build_leader_id).
- The job configured with the [latest Node version](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#Specifying-Node.js-versions) (`node_js: node`).
- The job configured with the [lts Node version](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#Specifying-Node.js-versions) (`node_js: lts/*`).
- The job with the highest node version

**Note**: If multiple jobs match, the one with the highest job ID (which corresponds to the last one defined in `.travis.yml`) will be identified as the build leader.

## Install

```bash
npm install --save travis-deploy-once
```

## Usage

```js
const deployOnce = require('travis-deploy-once');

try {
  const result = await deployOnce({travisOpts: {pro: true}, GH_TOKEN: 'xxxxxx', BUILD_LEADER_ID: 1});

  if (result === true) deployMyThing();
  if (result === false) console.log('Some job(s) failed');
  if (result === null) console.log('Did not run as the build leader');
} catch (err) {
  // something went wrong, and err will tell you what
}
```

## API

### deployOnce([options])

Returns a `Promise` that resolves to:
- `true` if the current Travis job is the build leader, the current `script` phase is successful and all other job have completed successfully. => Your code can safely run.
- `false` if at least one Travis job failed. => Your code should not run.
- `null` if the current Travis job is **not** the build leader. => Your code should not run, and will be executed on the build leader.

Throws an `Error` if:
- It doesn't run on Travis.
- The Github authentication token is missing.
- The Github authentication token is not authorized with Travis.
- It doesn't run on after_success step.

#### options

Type: `Object`

##### GH_TOKEN

Type: `String`
Default: `process.env.GH_TOKEN` or `process.env.GITHUB_TOKEN`

GitHub OAuth token.

##### BUILD_LEADER_ID

Type: `Number`
Default: `process.env.BUILD_LEADER_ID`

Defined which Travis job will run the script (build leader). If not defined the build leader will be the Travis job running on the highest Node version.

##### travisOpts

Type: `Object`

###### pro

Type: `Boolean`
Default: `false`

`true` to use [Travis Pro](https://travis-ci.com), `false` to use [Travis for Open Source](https://travis-ci.org).

###### enterprise

Type: `String`

[Travis Enterprise](https://enterprise.travis-ci.com) URL. If defined, the [pro](#pro) option will be ignored.

**Note**: This is the URL of the API endpoint, for example `https://travis.example.com/api`.
