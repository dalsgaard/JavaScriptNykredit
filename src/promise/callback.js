
function asyncAdd (a, b, callback) {
  setTimeout(function () {
    var r = a + b;
    console.log(a + ' + ' + b + ' = ' + r);
    callback(r);
  }, 100);
}

asyncAdd(2, 3, function (res) {
  asyncAdd(res, 4, function (res) {
    asyncAdd(res, 5, function (res) {
      asyncAdd(res, 6, function (res) {
        console.log(res);
      });
    });
  });
});
