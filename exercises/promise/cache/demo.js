'use strict'

const Cache = require('./cache.js');

let cache = new Cache('temp/data.json');
cache.open().then(conn => {
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
          console.log('Closed');
        })
    })
    .catch(reason => {
      console.log('Error', reason);
    });
}).catch(reason => {
  console.log('Error', reason);
});
