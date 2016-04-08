# Classes

### `class`

```js
class Foo {
  constructor(a, b) {
    this._a = a;
    this._b = b;
  }
  bar() {
    return this._a * this._b;
  }
}

let foo = new Foo(2, 4);
console.log(foo.bar());
```

### `extends`

```js
class Bar extends Foo { };

let bar = new Bar(3, 5);
console.log(bar.baz());
```

### *constructor*

```js
class Bar extends Foo {
  constructor(a, b) { }
};

let bar = new Bar(3, 5);
console.log(bar.baz());
```

```js
class Bar extends Foo {
  constructor(a, b) {
    super(a * 2, b * 2);
  }
};

let bar = new Bar(3, 5);
console.log(bar.baz());
```

### `this` and `super`

```js
class Bar extends Foo {
  constructor(a, b, c) {
    this._c = c; // => ReferenceError
    super(a * 2, b * 2);
  }
};
```

```js
class Bar extends Foo {
  constructor(a, b, c) {
    super(a * 2, b * 2);
    this._c = c;
  }
};
```

### `static`

```js
class Foo {
  static baz() {
    return 42;
  }
  constructor(a, b) {
    this._a = a;
    this._b = b;
  }
  baz() {
    return this._a * this._b;
  }
}

class Bar extends Foo { };

let bar = new Bar(3, 5);
console.log(bar.baz());

console.log(Bar.baz());
```

### Hoisting

There is *no* hoisting of `class` declarations.

```js
{
  let foo = new Foo(); // ReferenceError
  class Foo { };
}
```
