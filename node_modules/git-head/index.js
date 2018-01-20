'use strict'

var gitRefs = require('git-refs')

module.exports = function (root, cb) {
  if (typeof root === 'function') {
    cb = root
    root = '.git'
  }

  if (typeof cb !== 'function') throw new Error('no callback provided')

  gitRefs(root, function (err, data) {
    if (err) return cb(err)
    cb(null, data.get('HEAD'))
  })
}
