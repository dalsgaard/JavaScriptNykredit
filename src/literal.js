'use strict'

var x = 2, y = 4;
var foo = { x, y }
//var foo = { x: x, y: y }
console.log(foo);

var foo = {
  bar(a, b) {
    return a + b;
  },
  baz(a, b) {
    return a * b;
  }
};
console.log(foo.bar(2, 4));
console.log(foo.baz(2, 4));

var foo = {
  bar: function (a, b) {
    return a + b;
  },
  baz: function (a, b) {
    return a * b;
  }
};

function fooo () {
  let pc;
  return foo = {
    get c() { return pc; },
    set c(c) { pc = c; }
  };
}

let f = fooo();
f.c = 8;
console.log(f.c);
