# path-object
[![Build Status](https://travis-ci.org/christophwitzko/path-object.svg)](https://travis-ci.org/christophwitzko/path-object)

## Install

    $ npm install -S path-object

## Example

```javascript
var PathObject = require('path-object')()

var fileObj = new PathObject()

fileObj.set('path/to/file1', 'file1 content')
fileObj.set('path/to/file2', 'file2 content')
fileObj.set('another/path/to/file', 'another file content')

console.log('dump:', fileObj.dump())
console.log('dump with scope:', fileObj.dump('path'))

console.log('get by path:', fileObj.get('another/path/to/file'))
```

## Licence

The [MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright © 2015 [Christoph Witzko](https://twitter.com/christophwitzko)
