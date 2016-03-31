
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

asyncAdd(2, 3, function (err, res) {
  if (err) {
    console.log('Oh no - not a nine!');
  } else {
    asyncAdd(res, 4, function (err, res) {
      if (err) {
        console.log('Oh no - not a nine!');
      } else {
        asyncAdd(res, 5, function (err, res) {
          if (err) {
            console.log('Oh no - not a nine!');
          } else {
            asyncAdd(res, 6, function (err, res) {
              if (err) {
                console.log('Oh no - not a nine!');
              } else {
                console.log(res);
              }
            });
          }
        });
      }
    });
  }
});
