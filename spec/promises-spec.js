var assert = require('assert');

function createPromise () {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(42);
    }, 1000);
  });
}

describe('foo', function () {

  it('should return 42', function () {
    var p = createPromise();
    return p.then(function (i) {
      assert.equal(i, 42);
    });
  });

  it('should ...', function () {
    assert.equal(1, 1);
  });

  describe('bar', function () {
    var bar;

    before(function () {
      var p = createPromise();
      return p.then(function (i) {
        bar = i;
      });
    });

    it('should ...', function () {
      assert.equal(42, bar);
    });

  });

});
