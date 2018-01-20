const chalk = require('chalk');

/**
 * Logger with `log` and `error` function.
 *
 * @param {String} namespace log prefix
 */
module.exports = namespace => {
  return {
    log() {
      console.log(
        `${namespace ? `${chalk.magenta(`[${namespace}]:`)} ` : ''}${Array.prototype.slice.call(arguments).join()}`
      );
    },
    error() {
      console.error(
        `${namespace ? `${chalk.magenta(`[${namespace}]:`)} ` : ''}${chalk.red(
          Array.prototype.slice.call(arguments).join()
        )}`
      );
    },
  };
};
