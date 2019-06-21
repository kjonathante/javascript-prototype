function Animal(name, energy) {
  //const this = Object.create(Animal.prototype);
  this.name = name;
  this.energy = energy;

  //return this
}

Animal.prototype.eat = function(amount) {
  this.energy += amount
}

const leo = new Animal("leo", 50)
const proto = Object.getPrototypeOf(leo)

console.log(proto) // {eat: ƒ, constructor: ƒ}
console.log(Animal.prototype) // {eat: ƒ, constructor: ƒ}
console.log(proto === Animal.prototype) // true
// leo.prototype // undefined

// instance.constructor
// JavaScript puts a constructor property on the prototype by default, 
// any instances will be able to access their constructor via instance.constructor.
// constructor property points to the original function 
// or the class that the instance was created from.
console.log(leo.constructor) // leo.constructor.toString()
/*
ƒ Animal(name, energy) {
  //const this = Object.create(Animal.prototype);
  this.name = name;
  this.energy = energy;

  //return this
}
*/
