'use strict'

var fs = require('fs')
var path = require('path')

var PathObject = require('path-object')()
var slash = require('slash')
var walk = require('walk')

var hashRe = /^[0-9a-f]{40}$/
var prefRe = /^([0-9a-f]{40}) refs\/(.*)$/
var refsRe = /^ref: refs\/(.*)$/

module.exports = function (root, cb) {
  if (typeof root === 'function') {
    cb = root
    root = '.git'
  }

  if (typeof cb !== 'function') throw new Error('no callback provided')

  try {
    fs.existsSync(root)
  } catch (e) {
    return cb('could not access git directory')
  }

  function readText (file, icb) {
    fs.readFile(path.join(root, file), 'utf-8', function (error, data) {
      if (error) return icb(error)
      icb(null, data.trim())
    })
  }

  var foundRefs = new PathObject({HEAD: ''})

  readText('packed-refs', function (err, data) {
    if (!err) {
      data.split('\n').forEach(function (line) {
        var pref = prefRe.exec(line)
        if (pref && pref.length > 2) {
          foundRefs.set(pref[2], pref[1])
        }
      })
    }
    var refsRoot = path.join(root, 'refs')
    var walker = walk.walk(refsRoot, {followLinks: false})
    walker.on('file', function (wroot, fileStat, next) {
      var refpath = path.join(wroot.substr(refsRoot.length), fileStat.name)
      refpath = slash(refpath)
      readText(path.join('refs', refpath), function (err, data) {
        if (err) return cb('could not read ref')
        if (hashRe.test(data)) {
          foundRefs.set(refpath, data)
          return next()
        }
        var ref = refsRe.exec(data)
        if (!ref || !ref.length) return cb('invalid ref')
        readText(ref[1], function (err, data) {
          if (!err) {
            if (hashRe.test(data)) {
              foundRefs.set(refpath, data)
              return next()
            }
            return cb('invalid hash')
          }
          var foundRh = foundRefs.get(ref[1])
          if (foundRh) {
            foundRefs.set(refpath, foundRh)
            return next()
          }
          return cb('could not resolve ref')
        })
      })
    })

    walker.once('errors', function (wroot, nodeStatsArray, next) {
      walker.removeAllListeners('end')
      cb('could not read refs')
    })

    walker.once('end', function () {
      if (Object.keys(foundRefs).length === 1) return cb('empty git repository')
      readText('HEAD', function (err, data) {
        if (err) return cb('invalid head')
        if (hashRe.test(data)) {
          foundRefs.set('HEAD', data)
          return cb(null, foundRefs)
        }
        var ref = refsRe.exec(data)
        if (!ref || !ref.length) return cb('invalid ref')
        var foundRh = foundRefs.get(ref[1])
        if (foundRh) {
          foundRefs.set('HEAD', foundRh)
          return cb(null, foundRefs)
        }
        return cb('could not resolve ref')
      })
    })
  })
}
