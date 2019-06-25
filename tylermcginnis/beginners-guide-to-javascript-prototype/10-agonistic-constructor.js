function Animal (name, energy) {
  if (!(this instanceof Animal)) {
    return new Animal(name, energy)
  }

  this.name = name
  this.energy = energy
}

const leo = new Animal("leo", 50)
console.log(leo)
const mario = Animal("mario", 30)
console.log(mario)