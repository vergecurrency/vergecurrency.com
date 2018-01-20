#!/usr/bin/env node

'use strict'

var gitHead = require('../')

gitHead(function (err, hash) {
  if (err) return console.error('ERROR:', err)
  console.log(hash)
})
