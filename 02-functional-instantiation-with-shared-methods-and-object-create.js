const animalMethods = {
  // eat: function(amount) {
  //   this.energy += amount;
  // }
  eat(amount) {
    this.energy += amount;
  }
};

function Animal(name, energy) {
  // const animal = {};
  const animal = Object.create(animalMethods);
  animal.name = name;
  animal.energy = energy;
  //animal.eat = animalMethods.eat;
  return animal;
}

const leo = Animal("leo", 50);
const snoop = Animal("snoop", 40);

leo.eat(50);
console.log(leo.energy);
snoop.eat(20);
console.log(snoop.energy);
