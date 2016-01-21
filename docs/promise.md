# Promise

## Producing a Promise

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let ms = Date.now();
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
  value => {
    console.log(`Value ${value}`);
  },
  reason => {
    console.log(`Reason ${reason}`);
  }
);
```

## Chaining

```js
let q = promise.then(
  value => {
    console.log(`Value ${value}`);
  },
  reason => {
    console.log(`Reason ${reason}`);
  }
);

setTimeout(() => {
  console.log(q);
}, 2);
```

```js
let q = promise.then(
  value => {
    console.log(`Value ${value}`);
    return value;
  },
  reason => {
    console.log(`Reason ${reason}`);
    return value;
  }
);
```

### Only handling fulfillments

```js
let q = promise.then(
  value => {
    console.log(`Value ${value}`);
  }
);
```

### Only handling rejections

```js
let q = promise.then(
  null,
  reason => {
    console.log(`Reason ${reason}`);
  }
);
```

### `catch`

```js
let q = promise.catch(
  reason => {
    console.log(`Reason ${reason}`);
  }
);
```

### Combining `then` and `catch`

```js
promise.then(
  value => {
    console.log(`Value ${value}`);
  }
).catch(
  reason => {
    console.log(`Reason ${reason}`);
  }
);
```

### Multiple `then`

```js
promise.then(
  value => {
    console.log(`Value ${value}`);
    return value;
  }
).then(
  value => {
    console.log(`Value again ${value}`);
  }
).catch(
  reason => {
    console.log(`Reason ${reason}`);
  }
);
```

### `throw`

```js
promise.then(
  value => {
    console.log(`Value ${value}`);
    return value;
  }
).then(
  value => {
    console.log(`Value again ${value}`);
    throw value;
  }
).catch(
  reason => {
    console.log(`Reason ${reason}`);
  }
);
```

### Returning a *Promise*

```js
function createPromise(d) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ms = Date.now();
      if (ms % d === 0) {
        reject(ms);
      } else {
        resolve(ms);
      }
    }, 1);
  });
}

let promise = createPromise(5);

let q = promise.then(
  value => {
    console.log(`Value ${value}`);
    return createPromise(5);
  }
).then(
  value => {
    console.log(`Value ${value}`);
  }
).catch(
  reason => {
    console.log(`Reason ${reason}`);
  }
);
```

## Links

- [ECMAScript 6 promises (2/2): the API](http://www.2ality.com/2014/10/es6-promises-api.html)
- [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
