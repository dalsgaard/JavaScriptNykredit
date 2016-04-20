
# Database

Create a *promise* based *database* class. Data should be persisted to a JSON file.

## API

### Constructing

```js
let db = new Database('data.json');
```

### open

```js
db.open().then(conn => {

});
```

### set

```js
conn.set('key', 'value').then(() => {

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
let created = rec.created;
let updated = rec.updated;
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
fs.stat('filename', callback);
fs.writeFile('data.json', '{}', 'utf8', callback);
fs.readFile('data.json', 'utf8', callback);
```
