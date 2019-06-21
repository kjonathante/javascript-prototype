// Animal(...) is a "constructor function"
function Animal(name, energy) {
  const animal = {}

  animal.name = name
  animal.energy = energy

  animal.eat = function(amount) {
    this.energy += amount
  }

  return animal
}

const leo = Animal("leo", 50)
const snoop = Animal("snoop", 40)

leo.eat(50)
console.log(leo.energy)
snoop.eat(20)
console.log(snoop.energy)