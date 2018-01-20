const urlJoin = require('url-join');
const got = require('got');
const getTravisUrl = require('./get-travis-url');

/**
 * Retrieve the Travis jobs for the current build.
 *
 * @param {Object} travisOpts Options to pass to the Travis client
 * @param {String} travisOpts.enterprise The Travis enterprise URL
 * @param {Boolean} travisOpts.pro `true` to use Travis Pro, `false` otherwise
 * @param {String} travisToken The Travis Token retrieved from `auth/github`
 * @param {Number} buildId The current build ID
 * @return {Promise<Array>} Promise that resolves to the list of jobs
 */
module.exports = async (travisOpts, travisToken, buildId) => {
  try {
    return (await got(urlJoin(getTravisUrl(travisOpts), `builds/${buildId}`), {
      json: true,
      headers: {
        'user-agent': 'Travis',
        accept: 'application/vnd.travis-ci.2+json',
        authorization: `token ${travisToken}`,
      },
    })).body.jobs;
  } catch (err) {
    // https://github.com/semantic-release/travis-deploy-once/issues/3
    // https://github.com/pwmckenna/node-travis-ci/issues/17
    if (err.response && err.response.body && err.response.body.file === 'not found') {
      throw new Error(
        'The GitHub user of the "GH_TOKEN" has not authenticated Travis CI yet. Go to https://travis-ci.com/, login with the GitHub user of this token and then restart this job.'
      );
    }
    throw err;
  }
};
