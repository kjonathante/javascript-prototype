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
const snoop = new Animal("snoop", 40)

leo.eat(50)
console.log(leo.energy)
snoop.eat(20)
console.log(snoop.energy)