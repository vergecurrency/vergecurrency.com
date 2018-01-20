/**
 * Verify environment:
 * - Runs on Travis
 * - Has a Github authentication token
 * - Runs on after_success step (TRAVIS_TEST_RESULT is set)
 *
 * @param {Object} env Environment variables
 * @throws {Error} if one of the verification fails
 */
module.exports = env => {
  if (env.TRAVIS !== 'true') throw new Error('Not running on Travis');
  if (!env.GH_TOKEN) throw new Error('GitHub authentication missing');
  if (
    typeof env.TRAVIS_TEST_RESULT === 'undefined' ||
    env.TRAVIS_TEST_RESULT === false ||
    env.TRAVIS_TEST_RESULT === null
  ) {
    throw new Error('Not running in Travis after_success step');
  }
};
