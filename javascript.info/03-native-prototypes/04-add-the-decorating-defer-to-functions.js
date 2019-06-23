Function.prototype.defer = function (ms) {
  const f = this
  return function(...args) { //rest parameters
    console.log(args)
    setTimeout( () => {
      f.apply(this, args) // same as call but accepts arrays as arguments
    }, ms)
  }
};


function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // shows 3 after 1 second