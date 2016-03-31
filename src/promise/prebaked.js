
Promise.resolve(7).then(function (result) {
  console.log('Lucky number ' + result + '!');
});

Promise.reject(9).catch(function (reason) {
  console.log('Oh no - not a ' + reason + '!');
});
