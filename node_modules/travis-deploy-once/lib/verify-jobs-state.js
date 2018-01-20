const pRetry = require('p-retry');

/**
 * Return the list of pending job numbers.
 *
 * @param {Array} jobs Travis jobs to verify
 * @return {Array<String>} list of pending job numbers or an empty Array if all the jobs are successfuly completed
 * @throws {AbortError} if there a failed job
 */
module.exports = jobs =>
  jobs.reduce((pendingJobs, job) => {
    if (!job.allow_failure && job.state !== 'passed') {
      if (job.state === 'errored' || job.state === 'failed') {
        // Throw an abort error to stop checking the job state and exit
        throw new pRetry.AbortError(job.number);
      }
      pendingJobs.push(job.number);
    }
    return pendingJobs;
  }, []);
