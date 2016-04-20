
# Cache

Create a promise based *cache* class. Data should be persisted to a JSON file.

## API

### Constructing

```js
let cache = new PromiseCache('data.json');
```

### open

```js
cache.open().then(conn => {

});
```

### set

Records can be set to expire after a number of seconds. *Never* is default.

```js
conn.set('key', 'value', 3600).then(() => {

});
conn.set('foo', 42).then(() => {

});
```

### get

```js
conn.get('key').then(value => {

});
```

#### Meta data

```js
conn.get('key', true).then(rec => {

});
```

```js
let expires = rec.expires;
let value = rec.value;
```

### delete

```js
conn.delete('key').then(value => {

});
```

### close

```js
conn.close().then(() => {

});
```

## Hints

[Node.js fs](https://nodejs.org/api/fs.html)

```js
fs.stat('filename', (err, stats) => {

});
fs.writeFile('data.json', '{}', 'utf8', err => {

});
fs.readFile('data.json', 'utf8', (err, data) => {
  
});
```
