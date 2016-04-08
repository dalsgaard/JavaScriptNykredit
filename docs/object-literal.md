# Object Literal

## Concise Properties

```js
var x = 2, y = 4;
var foo = { x, y }
console.log(foo);
```

## Concise Methods

```js
var foo = {
  bar(a, b) {
    return a + b;
  },
  baz(a, b) {
    return a * b;
  }
};
console.log(foo.bar(2, 4));
console.log(foo.baz(2, 4));
```

## Computed Property Names

```js
var a = 'bar', b = 'baz';
var foo = {
  [a]: 2,
  [b]: 4
};
console.log(foo);
```

## Getter and Setter

```js
var foo = {
  get c() { return this._c; },
  set c(c) { this._c = c; }
};

foo.c = 8;
console.log(foo.c);
```
