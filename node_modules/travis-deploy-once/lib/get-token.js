const urlJoin = require('url-join');
const got = require('got');
const getTravisUrl = require('./get-travis-url');

/**
 * Authenticate with Travis and return the Travis token.
 *
 * @param {Object} travisOpts Options to pass to the Travis client
 * @param {String} travisOpts.enterprise The Travis enterprise URL
 * @param {Boolean} travisOpts.pro `true` to use Travis Pro, `false` otherwise
 * @param {Object} env Environment variables with GH_TOKEN
 * @return {String} The Travis token
 */
module.exports = async (travisOpts, env) =>
  (await got.post(urlJoin(getTravisUrl(travisOpts), 'auth/github'), {
    json: true,
    body: {github_token: env.GH_TOKEN || env.GITHUB_TOKEN}, // eslint-disable-line camelcase
    headers: {'user-agent': 'Travis', accept: 'application/vnd.travis-ci.2+json'},
  })).body.access_token;
