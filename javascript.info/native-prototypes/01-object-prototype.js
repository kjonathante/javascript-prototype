const obj = {} 
// same as const obj = new Object 
// same as const obj = new Object()

obj.__proto__ === Object.prototype // true
//obj.toString === obj.__proto__.toString === Object.prototype.toString

Object.prototype.__proto__ // null

const arr = [1, 2, 3];

// it inherits from Array.prototype?
arr.__proto__ === Array.prototype // true

// then from Object.prototype?
arr.__proto__.__proto__ === Object.prototype // true

// and null on the top.
arr.__proto__.__proto__.__proto__ === null // true

function f() {}

f.__proto__ === Function.prototype // true
f.__proto__.__proto__ == Object.prototype; // true, inherit from objects
