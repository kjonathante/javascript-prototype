function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

const rabbit = new Rabbit();
console.log(rabbit.constructor.toString());
// function Object() { [native code] } <= delegates to Object constructor

function F() {}
const f = new F();
console.log(f.constructor.toString());
// function F() {} <= points to the default constructor of F
// by default:
// F.prototype = { constructor: F }