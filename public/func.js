
console.log('forEach');

function forEach(list, callback) {
  for (var i = 0; i < list.length; i++) {
    callback(list[i], i);
  }
}

var f = function (element) {
  console.log(element);
};

forEach([1, 2, 3, 4], f);

console.log('map');

function map(list, callback) {
  var res = [];
  forEach(list, function (element, index) {
    res[index] = callback(element);
  });
  return res;
}
var list = map([1, 2, 3, 4], function (element) {
  return element * element;
});
console.log(list);

console.log('negate');

function negate(f) {
  return function () {
    return !f.apply(null, arguments);
  };
}
var n = negate(function (a, b) {
  return a == b;
});
console.log(n(2, 2));

console.log('once');

function once(f) {
  var done = false;
  return function () {
    if (!done) {
      f.apply(null, arguments);
      done = true;
    }
  }
}
var f = once(function () {
  console.log('You will see this only once!');
});
f();
f();

console.log('memorize');

function memorize(f, wait) {
  var done = false;
  var res;
  return function () {
    if (!done) {
      res = f.apply(null, arguments);
      done = true;
      setTimeout(function () {
        done = false;
      }, wait);
    }
    return res;
  }
}
var f = memorize(function () {
  return Date.now();
}, 5000);
console.log(f());
console.log(f());
