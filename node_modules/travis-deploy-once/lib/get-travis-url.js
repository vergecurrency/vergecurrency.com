module.exports = ({enterprise, pro} = {}) =>
  enterprise || (pro ? 'https://api.travis-ci.com' : 'https://api.travis-ci.org');
