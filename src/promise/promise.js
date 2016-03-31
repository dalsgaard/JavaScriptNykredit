
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

promiseAdd(6, 3).then(function (res) {
  console.log(res);
}).catch(function (reason) {
  console.log('Oh no - not a ' + reason + '!');
});
