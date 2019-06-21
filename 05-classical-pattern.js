class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }

  eat(amount) {
    this.energy += amount
  }
}

const leo = new Animal("leo", 50)
const snoop = new Animal("snoop", 40)

leo.eat(50)
console.log(leo.energy)
snoop.eat(20)
console.log(snoop.energy)