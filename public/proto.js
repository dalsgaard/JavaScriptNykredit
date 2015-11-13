
var Foo = function() {};
Foo.prototype.baz = 5;

var Bar = function() {};
Bar.prototype = new Foo();

(function() {
  var counter = 7;
  Bar.prototype.down = function () {
    return counter--;
  };
})();

var bar = new Bar();
var baz = new Bar();
