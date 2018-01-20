const pRetry = require('p-retry');
const getJobs = require('./get-jobs');
const verifyJobsState = require('./verify-jobs-state');

/**
 * Call the Travis API periodically to verify the jobs status for the current build, until all jobs are successfully completed or as soon as one of them fails.
 * Use an exponential backoff strategy: the more attempt the more to wait for the next one. Starts by calling the API after 3 seconds, and increase with each retry up to 15s.
 *
 * @param {Travis} travis Travis API client
 * @param {Number} buildId Current build id
 * @param {Number} currentJobId Current job id
 * @param {Array} initialJobs List of jobs retrieved initially
 * @param {Object} logger To log info and error
 * @param {[type]} retryOpts options to pass to `retry` (https://github.com/tim-kos/node-retry#retryoperationoptions)
 * @return {Promise<Boolean>} Promise that resolve to `true` if all other jobs are successful, `false` if one of them is failed
 */
module.exports = async (travisOpts, travisToken, buildId, currentJobId, initialJobs, logger, retryOpts) => {
  let lastAttempt;
  let jobCount;
  const run = async attempt => {
    lastAttempt = attempt;
    let jobs;
    // On the first attempt use the jobs retrieved from the API, previously
    if (attempt === 1) {
      jobs = initialJobs;
    } else {
      // On subsequent attempts call the API to get the most recent statuses
      try {
        jobs = await getJobs(travisOpts, travisToken, buildId);
      } catch (err) {
        logger.log(`Failed attempt ${attempt}, because Travis API returned the error: ${err}.`);
        throw err;
      }
    }
    jobCount = jobs.length;
    // Exclude the current job
    jobs = jobs.filter(job => job.id !== currentJobId);
    const pendingJobs = verifyJobsState(jobs, logger);
    if (pendingJobs.length > 0) {
      logger.log(`Aborting attempt ${attempt}, because of pending job(s): ${pendingJobs.join(', ')}.`);
      return Promise.reject(new Error('retry'));
    }
    return true;
  };

  try {
    await pRetry(run, Object.assign({forever: true, factor: 1.5, minTimeout: 3000, maxTimeout: 15000}, retryOpts));
    logger.log(`Success at attempt ${lastAttempt}. All ${jobCount} jobs passed.`);
    return true;
  } catch (err) {
    // Abort error
    logger.error(`Aborting at attempt ${lastAttempt}. Job ${err.message} failed.`);
    return false;
  }
};
