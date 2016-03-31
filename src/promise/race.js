
function randomPromise () {
  return new Promise(function (resolve, reject) {
    var ms = Math.round(Math.random() * 1000);
    var startTime = Date.now();
    setTimeout(function () {
      var stopTime = Date.now();
      console.log(ms + ': ' + startTime + ' -> ' + stopTime);
      resolve(ms);
    }, ms);
  });
}

var race = Promise.race([randomPromise(), randomPromise(), randomPromise()]);
race.then(function (first) {
  console.log(first);
});
