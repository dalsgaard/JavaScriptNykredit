var assert = require('assert');

setTimeout(function () {

  describe('foo', function () {

    it('should be equal', function () {
      assert.equal(1, 1);
    });

  });

  run();

}, 5000);
