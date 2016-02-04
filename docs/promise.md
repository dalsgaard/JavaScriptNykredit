# Promise

## Producing a Promise

```js
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var ms = Date.now();
    if (ms % 2 === 0) {
      resolve(ms);
    } else {
      reject(ms);
    }
  }, 1);
});
```

## Consuming a Promise

```js
promise.then(
  function (value) {
    console.log('Value ' + value);
  },
  function (reason) {
    console.log('Reason' + reason);
  }
);
```

## Chaining

```js
var q = promise.then(
  function (value) {
    console.log('Value ' + value);
  },
  function (reason) {
    console.log('Reason' + reason);
  }
);

setTimeout(function () {
  console.log(q);
}, 2);
```

```js
var q = promise.then(
  function (value) {
    console.log('Value ' + value);
    return value;
  },
  function (reason) {
    console.log('Reason' + reason);
    return reason;
  }
);
```

### Only handling fulfillments

```js
var q = promise.then(
  function (value) {
    console.log('Value ' + value);
  }
);
```

### Only handling rejections

```js
var q = promise.then(
  null,
  function (reason) {
    console.log('Reason' + reason);
  }
);
```

### `catch`

```js
var q = promise.catch(
  function (reason) {
    console.log('Reason' + reason);
  }
);
```

### Combining `then` and `catch`

```js
promise.then(
  function (value) {
    console.log('Value ' + value);
  }
).catch(
  function (reason) {
    console.log('Reason' + reason);
  }
);
```

### Multiple `then`

```js
promise.then(
  function (value) {
    console.log('Value ' + value);
    return value;
  }
).then(
  function (value) {
    console.log('Value again ' + value);
  }
).catch(
  function (reason) {
    console.log('Reason' + reason);
  }
);
```

### `throw`

```js
promise.then(
  function (value) {
    console.log('Value ' + value);
    return value;
  }
).then(
  function (value) {
    console.log('Value again ' + value);
    throw value;
  }
).catch(
  function (reason) {
    console.log('Reason' + reason);
  }
);
```

### Returning a *Promise*

```js
function createPromise(d) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var ms = Date.now();
      if (ms % d === 0) {
        reject(ms);
      } else {
        resolve(ms);
      }
    }, 1);
  });
}

var promise = createPromise(5);

var q = promise.then(
  function (value) {
    console.log('Value ' + value);
    return createPromise(5);
  }
).then(
  function (value) {
    console.log('Value ' + value);
  }
).catch(
  function (reason) {
    console.log('Reason' + reason);
  }
);
```

## Links

- [ECMAScript 6 promises (2/2): the API](http://www.2ality.com/2014/10/es6-promises-api.html)
- [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
