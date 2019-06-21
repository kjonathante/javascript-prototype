function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

function User () {}

const leo = new Animal('Leo', 7)

console.log(leo instanceof Animal) // true
console.log(leo instanceof User) // false