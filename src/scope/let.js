'use strict'

for (var i = 0; i < 10; i++) {
  var j = i;
  setTimeout(function () {
    console.log(j);
  }, i);
}
