# Module

- ES6 modules are file-based, meaning one module per file.
- ES6 modules are *Singletons*.
- There is no global scope in ES6 modules.

### `export`

```js
export var a = 4;
export var b = 2;
```

```js
var a = 4;
var b = 2;

export { a, b };
```

### `import`

```js
import { a, b } from 'bar.js';

console.log(a, b);
```

### `as`

```js
var a = 4;
var b = 2;

export { a, b as c };
```

```js
import { a as x, c as y } from 'bar.js';

console.log(x, y);
```

### *default*

```js
function baz () {
  return 42;
}
export default baz;
```

```js
function baz () {
  return 42;
}
export { baz as default };
```

```js
import bar from 'bar.js';
```

```js
var a = 4, b = 2;
function baz () {
  return 42;
}
export { baz as default, a, b };
```

```js
import bar, { a, b } from 'bar.js';
```

### Re-exporting

```js
export { c, d } from 'baz.js';
```

```js
export * from 'baz.js';
```

```js
export { c as x, d as y } from 'baz.js';
```

### `import * as`

```js
var a = 4, b = 2;
function baz () {
  return 42;
}
export { baz as default, a, b };
```

```js
import * as bar from 'bar.js';
console.log(bar.a, bar.b, bar.default());
```

```js
import baz, * as bar from 'bar.js';
console.log(bar.a, bar.b, baz());
```

### Hoisting

Imports are hoisted.

```js
bar();
import bar from 'bar.js';
```

### *by reference*



## Links

- [ECMAScript 6 modules: the final syntax](http://www.2ality.com/2014/09/es6-modules-final.html)
