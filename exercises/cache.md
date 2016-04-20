
# Cache

Create a *cache* class. Data should be persisted to a JSON file.

## API

### Constructing

```js
let cache = new Cache('data.json');
```

### open

```js
let conn = cache.open();
```

### set

Records can be set to expire after a number of seconds. *Never* is default.

```js
conn.set('key', 'value', 3600);
conn.set('foo', 42);
```

### get

```js
let value = conn.get('key');
```

#### Meta data

```js
let rec = conn.get('key', true);
```

```js
let expires = rec.expires;
let value = rec.value;
```

### delete

```js
conn.delete('key');
```

### close

```js
conn.close();
```

## Hints

[Node.js fs](https://nodejs.org/api/fs.html)

```js
fs.statSync('filename');
fs.writeFileSync('data.json', '{}', 'utf8');
fs.readFileSync('data.json', 'utf8');
```
