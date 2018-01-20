const semver = require('semver');

/**
 * Find the build leader based on the node version of the build's jobs.
 *
 * @param {Array<String>} versions List of node versions, one for each job, ordered in order as the jobs
 * @param {Object} logger To log info and error
 * @return {Number} the build leader position (correspond to the position in the aray of versions)
 */
module.exports = (versions, logger) => {
  logger.log(
    `Elect build leader among builds with Node versions: ${Array.isArray(versions) ? versions.join(', ') : versions}.`
  );
  // If there is only one candidate, then it's the winner
  if (!Array.isArray(versions) || versions.length === 1) {
    logger.log(`Elect job 1 as build leader.`);
    return 1;
  }

  // If there is a latest stable/lts node it's the winner
  // https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#Specifying-Node.js-versions
  const stable = versions.lastIndexOf('node') + 1;
  if (stable) {
    logger.log(`Elect job ${stable} as build leader as it runs on the latest node stable version.`);
    return stable;
  }
  const lts = versions.lastIndexOf('lts/*') + 1;
  if (lts) {
    logger.log(`Elect job ${lts} as build leader as it runs on the node lts version.`);
    return lts;
  }

  // Convert to Strings as it's expected by semver
  versions = versions.map(version => String(version));
  // Otherwise we use the lower bound of all valid semver ranges
  const validRanges = versions.filter(semver.validRange);
  const lowVersionBoundaries = validRanges.map(semver.Range).map(r => r.set[0][0].semver.version);

  // Then we find the highest of those
  const highestVersion = semver.sort(Array.from(lowVersionBoundaries)).pop();
  const highestRange = validRanges[lowVersionBoundaries.lastIndexOf(highestVersion)];
  // And make its build job the winner
  const buildLeader = versions.lastIndexOf(highestRange) + 1;
  logger.log(`Elect job ${buildLeader} as build leader as it runs the highest node version (${highestRange}).`);
  return buildLeader;
};
