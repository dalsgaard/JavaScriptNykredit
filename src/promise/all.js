
function randomPromise () {
  return new Promise(function (resolve, reject) {
    var ms = Math.round(Math.random() * 1000);
    var startTime = Date.now();
    setTimeout(function () {
      var stopTime = Date.now();
      console.log(ms + ': ' + startTime + ' -> ' + stopTime);
      if (ms > 400) {
        reject(ms);
      } else {
        resolve(ms);
      }
    }, ms);
  });
}

var all = Promise.all([randomPromise(), randomPromise(), randomPromise()]);
all.then(function (results) {
  console.log(results);
}).catch(function (results) {
  console.log('Error!', results);
});
