'use strict'

var exec = require('child_process').exec

var test = require('tape')

var gitRefs = require('./')

var refRe = /^([0-9a-f]{40}) (.*)$/

var compareRefs = {}

test('get git refs', function (t) {
  t.plan(2)
  exec('git show-ref --head', function (error, stdout, stderr) {
    t.error(error, 'error')
    stdout.trim().split('\n').forEach(function (line) {
      var pref = refRe.exec(line)
      if (pref && pref.length > 2) {
        compareRefs[pref[2]] = pref[1]
      }
    })
    t.ok(Object.keys(compareRefs).length > 0, 'refs length')
  })
})

test('compare refs', function (t) {
  t.plan(1 + Object.keys(compareRefs).length)
  gitRefs(function (err, data) {
    t.error(err, 'error')
    Object.keys(compareRefs).forEach(function (k, i) {
      t.equal(data.get(/^refs\//.test(k) ? k.substr(5) : k), compareRefs[k], 'ref ' + (i + 1))
    })
  })
})
