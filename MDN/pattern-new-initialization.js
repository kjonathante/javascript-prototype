function Animal(name, energy){
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function(amount){
  this.energy += amount
}

function Dog(name, energy){
  Animal.call(this, name, energy)
}

// If F.prototype is an object, 
// then new operator uses it to set [[Prototype]] for the new object.
Dog.prototype = new Animal;
Dog.prototype.constructor = Dog;

var instance = new Dog("leo", 50); // instance.__proto__ == new Animal

/*
Animal {name: "leo", energy: 50}
  energy: 50
  name: "leo"
  __proto__:
    eat: ƒ (amount)
    constructor: ƒ Animal(name, energy)
    __proto__: Object
*/

