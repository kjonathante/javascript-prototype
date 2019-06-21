function Animal(name, energy) {
  const animal = Object.create(Animal.prototype); //delegate to the function's prototype on failed lookups
  animal.name = name;
  animal.energy = energy;

  return animal
}

Animal.prototype.eat = function(amount) {
  this.energy += amount
}

const leo = Animal("leo", 50)
const snoop = Animal("snoop", 40)

leo.eat(50)
console.log(leo.energy)
snoop.eat(20)
console.log(snoop.energy)