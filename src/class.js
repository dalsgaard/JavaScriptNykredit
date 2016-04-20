'use strict'

class Foo {
  constructor(a, b) {
    this._a = a;
    this._b = b;
  }
  baz() {
    return this._a * this._b;
  }
  static baz() {
    return 42;
  }
}

let foo = new Foo(2, 4);
console.log(foo.baz());

let Bar = class extends Foo {
  constructor(a, b) {
    super();
    this._a = 1;
    this._b = 6;
  }
  static baz() {
    return super.baz() + 2;
  }
};

let bar = new Bar(3, 5);
console.log(bar.baz());

console.log(Bar.baz());
