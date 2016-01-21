
function Queue () { }
Queue.prototype.initQueue = function () {
  this._list = [];
}
Queue.prototype.push = function (elem) {
  this._list.push(elem);
};
Queue.prototype.size = function () {
  return this._list.length;
};

function LIFO () {
  this.initQueue();
}
LIFO.prototype = new Queue();
LIFO.prototype.pull = function () {
  return this._list.pop();
};

var lifo = new LIFO();
