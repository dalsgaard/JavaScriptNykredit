'use strict'

const foo = {
  baz() {
    console.log('Baz!');
  }
}

const bar = {
  baz () {
    console.log('Bar\'s Baz');
    super.baz();
  }
}

Object.setPrototypeOf(bar, foo);

bar.baz();
