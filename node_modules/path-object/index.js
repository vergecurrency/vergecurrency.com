'use strict'

var assign = require('lodash.assign')
var cutil = require('core-util-is')

module.exports = function (seperator) {
  seperator = seperator || '/'

  function isValue (val) {
    return cutil.isBuffer(val) ||
            cutil.isDate(val) ||
            cutil.isError(val) ||
            cutil.isFunction(val) ||
            cutil.isRegExp(val) ||
            cutil.isPrimitive(val)
  }

  function isObject (val) {
    return cutil.isObject(val) && !isValue(val)
  }

  /* eslint consistent-this:0 */
  var PathObject = function (obj) {
    if (!(this instanceof PathObject)) return new PathObject(obj)
    if (isObject(obj)) assign(this, obj)
  }

  var pofns = ['set', 'get', 'exists', 'remove', 'dump']

  function normalizePath (path) {
    if (!path || !cutil.isString(path)) throw new Error('invaild path')
    if (path[path.length - 1] === seperator) {
      path = path.substr(0, path.length - 1)
    }
    if (path[0] === seperator) {
      path = path.substr(1)
    }
    if (!path.length) throw new Error('invaild path')
    var spath = path.split(seperator)
    spath = spath.filter(function (e) {
      return e
    })
    if (!spath.length || ~pofns.indexOf(spath[0])) {
      throw new Error('invaild path')
    }
    return spath
  }

  PathObject.prototype.set = function (path, value) {
    var spath = normalizePath(path)
    var last = this
    spath.forEach(function (n, i) {
      if (isObject(last)) {
        last[n] = (spath.length - i > 1) ?
                      (isObject(last[n]) ? last[n] : {}) :
                      value
      }
      last = last[n]
    })
  }

  PathObject.prototype.get = function (path) {
    var spath = normalizePath(path)
    var last = this
    var err = spath.some(function (n) {
      if (cutil.isUndefined(last[n])) return true
      last = last[n]
    })
    return err ? undefined : last
  }

  PathObject.prototype.exists = function (path) {
    var spath = normalizePath(path)
    var el = spath.pop()
    var last = spath.length ? this.get(spath.join(seperator)) : this
    return isObject(last) && el in last
  }

  function objectChainCount (obj, spath) {
    var last = obj
    var chain = []
    spath.some(function (n) {
      if (!isObject(last)) return true
      chain.push(Object.keys(last).length)
      last = last[n]
    })
    var count = 0
    chain.reverse().some(function (e) {
      count++
      return e !== 1
    })
    return count
  }

  PathObject.prototype.remove = function (path) {
    var spath = normalizePath(path)
    if (!this.exists(path)) throw new Error('path does not exist')
    spath = spath.slice(0, spath.length - objectChainCount(this, spath) + 1)
    var el = spath.pop()
    var last = spath.length ? this.get(spath.join(seperator)) : this
    delete last[el]
  }

  function traverse (retObj, root, obj) {
    Object.keys(obj).forEach(function (k) {
      if (isValue(obj[k])) {
        retObj[root + k] = obj[k]
        return
      }
      traverse(retObj, root + k + seperator, obj[k])
    })
  }

  PathObject.prototype.dump = function (root, strip) {
    var retObj = {}
    var nroot = ''
    var startObj = this
    if (root) {
      var srobj = this.get(root)
      if (isObject(srobj)) {
        nroot = strip ? '' : normalizePath(root).join(seperator) + seperator
        startObj = srobj
      } else return {}
    }
    traverse(retObj, nroot, startObj)
    return retObj
  }

  return PathObject
}
