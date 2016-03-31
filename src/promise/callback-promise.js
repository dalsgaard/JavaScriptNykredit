
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

function createCallbackPromise (fun) {
  return new Promise(function (resolve, reject) {
    var callback = function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    }
    fun(callback);
  });
}

function promiseAdd (a, b) {
  return createCallbackPromise(function (callback) {
    asyncAdd(a, b, callback);
  });
}

promiseAdd(3, 4).then(function (result) {
  console.log(result);
}).catch(function (reason) {
  console.log('Oh no - not a ' + reason + '!');
});
