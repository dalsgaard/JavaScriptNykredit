# Mocha

### Installing

```
$ npm install mocha -g
```

## BDD Interface

### describe

```js
describe('something', function () {

});
```

#### Nesting

```js
describe('something', function () {

  describe('something more specific', function () {

  });

});
```

### beforeEach

```js
describe('something', function () {
  var something;

  beforeEach(function () {
    something = new Something();
  });

});
```

### it

```js
describe('something', function () {
  var something;

  beforeEach(function () {
    something = new Something();
  });

  it('should have a foo', function () {
    assert.notStrictEqual(something.foo, undefined);
  });

});
```

#### assert

```js
var assert = require('assert');
```

[Node.js v5.5.0 Documentation - Assert](https://nodejs.org/api/assert.html)

### before

```js
describe('something', function () {
  var something;

  before(function () {
    something = new Something();
  });

});
```

### afterEach

```js
describe('something', function () {

  afterEach(function () {
    something.release();
  });

});
```

### after

```js
describe('something', function () {

  after(function () {
    something.release();
  });

});
```

## Asynchronous Tests

### done

```js
it('should return 42', function (done) {
  something.bar(function (result) {
    assert.equal(result, 42);
    done();
  });
});
```

```js
before(function (done) {
  createSomething(function (result) {
    something = result;
    done();
  });
});
```

### Promises

```js
describe('foo', function () {

  it('should return 42', function () {
    var foo = createPromise();
    return foo.then(function (i) {
      assert.equal(i, 42);
    });
  });

});
```

```js
describe('something', function () {
  var something;

  before(function () {
    return System.import('something').then(function (result) {
      something = result;
    });
  });

});
```

### run

```sh
$ mocha --delay spec/
```

```js
System.import('something').then(function (something) {

  describe('something', function () {

  });

  run();

});
```

## Dynamically Generated Tests

```js
describe('something', function () {
  var something;

  beforeEach(function () {
    something = new Something();
  });

  function itShouldHaveA (prop) {
    it('should have a ' + prop, function () {
      assert.notStrictEqual(something[prop], undefined);
    });    
  }

  itShouldHaveA('foo');
  itShouldHaveA('bar');
  itShouldHaveA('baz');

});
```

## Pending Tests

```js
describe('something', function () {

  it('should ...');

});
```

## Selecting Tests

### only

```js
describe.only('something', function () {

});
```

```js
it.only('should ...', function () {

});
```

### skip

```js
describe.skip('something', function () {

});
```

```js
it.skip('should ...', function () {

});
```

```js
xdescribe('something', function () {

});
```

```js
xit('should ...', function () {

});
```
