var assert = require('assert');

describe('something', function () {
  var something;

  beforeEach(function () {
    something = {
      foo: 1,
      bar: 2,
      baz: 3
    };
  });

  function itShouldHaveA (prop) {
    it('should have a ' + prop, function () {
      assert.notStrictEqual(something[prop], undefined);
    });
  }

  itShouldHaveA('foo');
  itShouldHaveA('bar');
  itShouldHaveA('baz');

});
