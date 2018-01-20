# git-refs
[![Build Status](https://travis-ci.org/christophwitzko/git-refs.svg)](https://travis-ci.org/christophwitzko/git-refs)

## Install

    $ npm install -g git-refs


## Example

```javascript
var gitRefs = require('git-refs')

gitRefs('/path/to/.git', function (err, data) {
  if (err) return console.log(err)
  console.dir(data)
  // data is a path-object (http://git.io/Nh7p)
  console.log('master:', data.get('heads/master'))
  console.dir(data.get('tags'))
  console.dir(data.dump())
})
```

## Licence

The [MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright © 2015 [Christoph Witzko](https://twitter.com/christophwitzko)
