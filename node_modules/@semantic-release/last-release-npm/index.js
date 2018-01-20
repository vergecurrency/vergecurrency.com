const {promisify} = require('util');
const {resolve} = require('url');
const SemanticReleaseError = require('@semantic-release/error');
const RegClient = require('npm-registry-client');
const npmlog = require('npmlog');

module.exports = async function({retry} = {}, {pkg, npm, options}, cb) {
  npmlog.level = npm.loglevel || 'warn';
  const client = new RegClient({log: npmlog, retry});
  try {
    const data = await promisify(client.get.bind(client))(resolve(npm.registry, pkg.name.replace('/', '%2F')), {
      auth: npm.auth,
    });
    if (data && !data['dist-tags']) {
      return cb(null, {});
    }
    const distTags = data['dist-tags'];
    let version = distTags[npm.tag];

    if (
      !version &&
      options &&
      options.fallbackTags &&
      options.fallbackTags[npm.tag] &&
      distTags[options.fallbackTags[npm.tag]]
    ) {
      version = distTags[options.fallbackTags[npm.tag]];
    }

    if (!version) {
      return cb(
        new SemanticReleaseError(
          `There is no release with the dist-tag "${npm.tag}" yet. Tag a version manually or define "fallbackTags".`,
          'ENODISTTAG'
        )
      );
    }

    cb(null, {
      version,
      gitHead: data.versions[version].gitHead,
      get tag() {
        npmlog.warn('deprecated', 'tag will be removed with the next major release');
        return npm.tag;
      },
    });
  } catch (err) {
    if (err.statusCode === 404 || /not found/i.test(err.message)) {
      return cb(null, {});
    }
    return cb(err);
  }
};
