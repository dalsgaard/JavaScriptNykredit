'use strict'

/*
class Foo {
  constructor (a) {
    this.a = a;
  }
  baz () {
    console.log('Baz!');
  }
}

class Bar extends Foo {
  constructor (a, b) {
    super(a);
  }
  baz () {
    console.log(super.baz === Foo.prototype.baz);
  }
}

let bar = new Bar(2, 3);

bar.baz();
*/

function Foo () {

}
Foo.prototype.baz = function () {
  console.log('Baz!');
}

function Bar () {

}
Bar.prototype = new Foo();
Bar.prototype.baz = function () {
  super.baz();
}

let bar = new Bar();
bar.baz();
