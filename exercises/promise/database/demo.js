'use strict'

const Database = require('./database.js');

let database = new Database('temp/database-data.json');
database.open().then(conn => {
  conn.set('foo', 42);
  conn.set('bar', 13)
    .then(() => {
      return conn.get('foo').then(value => {
        console.log(value);
      });
    })
    .then(() => {
      return conn.close()
        .then(() => {
          console.log('Database closed');
        })
    })
    .catch(reason => {
      console.log('Error', reason);
    });
}).catch(reason => {
  console.log('Error', reason);
});
