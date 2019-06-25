/*
instanceof operator tests 
whether the prototype property 
of a constructor appears 
anywhere in the prototype 
chain of an object
*/
function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

function User () {}

const leo = new Animal('Leo', 7)

leo instanceof Animal // true
leo instanceof User // false