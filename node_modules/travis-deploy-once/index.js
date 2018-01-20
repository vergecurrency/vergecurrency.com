module.exports = require('semver').lt(process.version, '8.0.0')
  ? function() {
      console.error(`Node with ${process.version} can't be the build leader. Node 8 and up required.`);
      return null;
    }
  : require('./lib/travis-deploy-once');
