# Chai

```sh
$ npm install chai
```

## Expect

### Requiring expect

```js
var expect = require('chai').expect;

expect(foo).to.equal(42);
```

#### AssertionError

```js
try {
  expect(24).to.equal(42)
} catch (e) {
  console.log(e)
} // =>
/*
{ [AssertionError: expected 24 to equal 42]
  message: 'expected 24 to equal 42',
  showDiff: true,
  actual: 24,
  expected: 42 }
*/
```

`AssertionError` is the protocol between *chai* and *mocha*.

### Chaining words

- to
- be
- been
- is
- that
- which
- and
- has
- have
- with
- at
- of
- same
- a
- an

```js
expect(foo).to.be.equal(42);
```

```js
expect(foo).equal(42);
```

### equal/equals/eq

```js
expect(foo).equal(42);
```

```js
expect(foo).equals(42);
```

```js
expect(foo).eq(42);
```

Strict equal.

#### deep

```js
expect(foo).to.deep.equal({ foo: 42 });
```

```js
expect(foo).to.deep.equal([1, 2, 3]);
```

```js
expect(foo).to.deep.equal({ foo: [1, 2, 3] });
```

### eql

```js
expect(foo).to.eql({ foo: 42 });
```

Deep equal.

### not

```js
expect(foo).to.not.equal(42);
```

```js
expect(foo).not.to.equal(42);
```

### instanceof

```js
expect(foo).to.be.an.instanceof(Number);
```

### a/an

```js
expect(foo).to.be.a('string');
```

```js
expect(foo).to.be.an('object');
```

*a* and *an* can be both chain words and assertions.

### ok

```js
expect(foo).to.be.ok;
```

Asserts that the target is [_truthy_](https://github.com/dalsgaard/JavaScriptNykredit/blob/master/docs/coercion.md#truthy).

### exist

```js
expect(foo).to.exist;
```

Neither null nor undefined.

### true

```js
expect(foo).to.be.true;
```

### false

```js
expect(foo).to.be.false;
```

### null

```js
expect(foo).to.be.null;
```

### undefined

```js
expect(foo).to.be.undefined;
```

### key/keys

```js
expect(foo).to.have.key('bar');
```

```js
expect(foo).to.have.keys('bar', 'baz');
```

```js
expect(foo).to.have.keys(['bar', 'baz']);
```

```js
expect(foo).to.have.keys({ bar: 42, baz: 24 });
```

Exactly this set of keys.

#### contain

```js
expect(foo).to.contain.keys('bar', 'baz');
```

At least this set of keys.

### property
