
var cache = {};

function addToCache (exp, value) {
  cache[exp] = value;
}

function findInCache (exp) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var value = cache[exp];
      if (value) {
        console.log('From cache');
        resolve(value);
      } else {
        reject(exp);
      }
    }, 50);
  });
}

function evaluate (exp) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var value = eval(exp);
      resolve(value);
    }, 100);
  });
}

function calcExp (exp) {
  return findInCache(exp).catch(function (reason) {
    return evaluate(exp).then(function (result) {
      addToCache(exp, result);
    });
  });
}

calcExp('2 + 3').then(function (result) {
  console.log(result);
}).then(function () {
  calcExp('2 + 3').then(function (result) {
    console.log(result);
  });
});
