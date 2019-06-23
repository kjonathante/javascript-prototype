Function.__proto__.defer = function (n) {
  setTimeout(this, n)
};

function f() {
  alert("Hello!");
}

f.defer(1000); // shows "Hello!" after 1 second

Function.__proto__.defer = function (n) {
  const f = this
  return function(...args) {
    console.log(args)
    setTimeout( _ => {
      f.apply(this, args)
    }, n)
  }
};


function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // shows 3 after 1 second