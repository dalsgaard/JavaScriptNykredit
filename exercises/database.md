
# Database

Create a *database* class. Data should be persisted to a JSON file.

## API

### Constructing

```js
let db = new Database('data.json');
```

### open

```js
let conn = db.open();
```

### set

```js
conn.set('key', 'value');
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
let created = rec.created;
let updated = rec.updated;
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
const fs = require('fs');
fs.statSync('filename');
fs.writeFileSync('data.json', '{}', 'utf8');
fs.readFileSync('data.json', 'utf8');
```
