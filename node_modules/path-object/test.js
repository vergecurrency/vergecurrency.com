'use strict'

var test = require('tape')

var PathObject = require('./')()

test('set path', function (t) {
  t.plan(6)
  var po = new PathObject()
  po.set('my/cool/path', 'test1')
  t.equal(po.my.cool.path, 'test1', 'set 1')
  po.set('/my/', 'test2')
  t.equal(po.my, 'test2', 'set 2')
  po.set('/my1/path', 'test3')
  t.equal(po.my1.path, 'test3', 'set 3')
  po.set('foo/bar', {asd: 'test4'})
  t.equal(po.foo.bar.asd, 'test4', 'set 4')
  t.throws(po.set.bind(po, '/', 'test'), /invaild path/, 'set invalid path 1')
  t.throws(po.set.bind(po, 'set', 'test'), /invaild path/, 'set invalid path 2')
})

test('get path', function (t) {
  t.plan(5)
  /* eslint new-cap: 0 */
  var po = PathObject({
    my: {
      cool: 'path'
    },
    cd: {
      pwd: {
        xd: {
          master: 'asdasdasd'
        }
      }
    }
  })
  t.equal(po.get('my/cool'), po.my.cool, 'get 1')
  t.equal(po.get('/cd/pwd/xd/'), po.cd.pwd.xd, 'get 2')
  t.equal(po.get('/cd//pwd///xd//master/'), po.cd.pwd.xd.master, 'get 3')
  t.equal(po.get('cd/pwd/xd/master'), po.cd.pwd.xd.master, 'get 4')
  t.equal(po.get('foo/bar'), undefined, 'get 5')
})

test('exists path', function (t) {
  t.plan(4)
  /* eslint new-cap: 0 */
  var po = PathObject({
    my: {
      cool: 'path'
    },
    cd: {
      pwd: {
        xd: {
          master: 'asdasdasd'
        }
      }
    }
  })
  t.ok(po.exists('my/cool'), 'exists 1')
  t.notOk(po.exists('foo/bar'), 'exists 2')
  t.ok(po.exists('cd/pwd'), 'exists 3')
  t.notOk(po.exists('my/very'), 'exists 4')
})

test('remove path', function (t) {
  t.plan(5)
  /* eslint new-cap: 0 */
  var po = PathObject({
    my: {
      cool: 'path',
      very: {
        cool: {
          path: 'root'
        }
      }
    },
    cd: {
      pwd: {
        xd: {
          master: {
            ref: 'asdasdasd'
          }
        },
        lol: 33
      }
    },
    layers: {
      main: '1'
    }
  })
  po.remove('cd/pwd/xd/master/ref')
  t.equal(po.cd.pwd.xd, undefined, 'remove 1')
  po.remove('cd/pwd/lol')
  t.equal(po.cd, undefined, 'remove 2')
  po.remove('my/cool')
  t.equal(po.my.cool, undefined, 'remove 3')
  po.remove('layers')
  t.equal(po.layers, undefined, 'remove 4')
  t.throws(po.remove.bind(po, 'cd/asd'), /path does not exist/, 'remove invalid path')
})

test('dump paths', function (t) {
  t.plan(8)
  var po = new PathObject({
    my: {
      cool: 'path',
      nice: {
        way: 'yolo'
      }
    },
    cd: {
      pwd: {
        master: 'mx',
        exp: /^self/,
        timestamp: new Date()
      }
    },
    zero: null,
    buf: new Buffer('test'),
    HEAD: '123123'
  })
  var dump = po.dump()
  t.equal(dump['my/cool'], po.my.cool, 'dump 1')
  t.equal(dump['cd/pwd/master'], po.cd.pwd.master, 'dump 2')
  t.equal(dump['HEAD'], po.HEAD, 'dump 3')
  t.equal(dump['buf'].toString(), po.buf.toString(), 'dump 4')
  var nspDump1 = po.dump('my')
  t.equal(nspDump1['my/cool'], po.my.cool, 'dump 5')
  t.equal(nspDump1['my/nice/way'], po.my.nice.way, 'dump 6')
  var nspDump2 = po.dump('cd', true)
  t.equal(nspDump2['pwd/master'], po.cd.pwd.master, 'dump 7')
  var nspDump3 = po.dump('asd')
  t.deepEqual(nspDump3, {}, 'dump 8')
})
