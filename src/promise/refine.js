var spell = require('spell-it')('en');

function asyncAdd (a, b, callback) {
  setTimeout(function () {
    var r = a + b;
    console.log(a + ' + ' + b + ' = ' + r);
    if (r === 9) {
      callback(r, null);
    } else {
      callback(null, r);
    }
  }, 100);
}

function promiseAdd (a, b) {
  return new Promise(function (resolve, reject) {
    asyncAdd(a, b, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

function sum () {
  return promiseAdd(1, 3).then(function (res) {
    return promiseAdd(res, 4);
  }).then(function (res) {
    return promiseAdd(res, 5);
  }).then(function (res) {
    return promiseAdd(res, 6);
  });
}

var s = sum().then(function (res) {
  return spell(res);
}).catch(function (reason) {
  throw spell(reason);
});

s.then(function (res) {
  console.log(res);
}).catch(function (reason) {
  console.log('Oh no - not a ' + reason + '!');
});
