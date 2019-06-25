/*
Regardless of whichever pattern you used 
to create an object, getting that object’s 
prototype can be accomplished using 
the Object.getPrototypeOf method.
*/

function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

const leo = new Animal('Leo', 7)
Object.getPrototypeOf(leo) 
// {constructor: ƒ, eat: ƒ}
// therefore you can do 
// const snoop = new leo.constructor("snoop", 9)
Object.getPrototypeOf(leo) === Animal.prototype // true

// leo.__proto__ old school way