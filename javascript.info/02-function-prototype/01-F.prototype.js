const animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

// If F.prototype is an object, 
Rabbit.prototype = animal;

// then new operator uses it to set [[Prototype]] for the new object.
const rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

rabbit.eats // true