# @semantic-release/condition-travis

[semantic-release](https://github.com/semantic-release/semantic-release) plugin to check [Travis CI](https://travis-ci.org/) environment before publishing.

[![Travis](https://img.shields.io/travis/semantic-release/condition-travis.svg)](https://travis-ci.org/semantic-release/condition-travis)
[![Codecov](https://img.shields.io/codecov/c/github/semantic-release/condition-travis.svg)](https://codecov.io/gh/semantic-release/condition-travis)
[![Greenkeeper badge](https://badges.greenkeeper.io/semantic-release/condition-travis.svg)](https://greenkeeper.io/)

Verify that `semantic-release` is running:
-   on Travis CI
-   on the right git branch and not on a PR build
-   only after all other Travis jobs are successful (using [travis-deploy-once](https://github.com/semantic-release/travis-deploy-once))

### Options

| Option                | Description                                                          | Default                                                |
| --------------------- | -------------------------------------------------------------------- | ------------------------------------------------------ |
| `githubToken`         | **Required.** The Github token used to authenticate with Travis API. | `process.env.GH_TOKEN` or `process.env.GITHUB_TOKEN`   |
| `githubUrl`           | The GitHub Enterprise endpoint.                                      | `process.env.GH_URL` or `process.env.GITHUB_URL`       |
| `githubApiPathPrefix` | The GitHub Enterprise API prefix.                                    | `process.env.GH_PREFIX` or `process.env.GITHUB_PREFIX` |

## Configuration

The plugin is used by default by [semantic-release](https://github.com/semantic-release/semantic-release) so no specific configuration is requiered if `githubToken`, `githubUrl` and `githubApiPathPrefix` are set via environment variable.

## Travis configuration

`semantic-release` require Node node version >= 8, so at least one Travis job as to run on Node 8 (or greater).

### With one job 

No specific configuration is required. `semantic-release` will run on the only Travis job.

```yml
language: node_js
node_js:
  - 8

after_success:
  - npm run semantic-release
```

### With multiple jobs on different Node versions and OS

If there is multiple Node version and OS configured, [travis-deploy-once](https://github.com/semantic-release/travis-deploy-once) will guarantee that `semantic-release` is executed on the highest Node version, after all other jobs are successful, without any additionnal configurations.

```yml
language: node_js
node_js:
  - 8
  - 6
  - 4
os:
  - linux
  - osx

after_success:
  - npm run semantic-release
```

In this example Travis will run 6 jobs (Node 8/Linux, Node 8/ OSX, Node 6/Linux etc...) and `semantic-release` will be executed on Node 8 on Linux, only after the 5 other jobs are successful.

### Using Travis Build stages

Travis support [Build Stages](https://docs.travis-ci.com/user/build-stages/) for more complex workflows. It's possible to use `semantic-release` with Build Stages by configuring the environment variable `BUILD_LEADER_ID` to defined which job will run `semantic-release`.

**The build stage configuration has to guarantee that the job configured with `BUILD_LEADER_ID` will run only after all other jobs are successful.**
 
```yml
language: node_js
node_js:
  - 8
  - 6
  - 4
os:
  - linux
  - osx
env:
  - BUILD_LEADER_ID=7
jobs:
  include:
    - stage: release
      node_js: 8
      os: linux
      after_success: 
        - npm run semantic-release
```

In this example Travis will run 6 jobs in the default stage (Node 4, 6 and 8 on Linux and OSX) and if those 6 jobs are successful the release stage will run the 7th job (on Node 8 / Linux) that will execute `semantic-release`.
The environment variable `BUILD_LEADER_ID` is set to `7` as `semantic-release` should run on the 7th job.
