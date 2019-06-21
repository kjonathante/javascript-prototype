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

console.log("## Properties on the instance.")
for(let key in leo) {
  if (leo.hasOwnProperty(key)) {
    console.log(`Key: ${key}. Value: ${leo[key]}`)
  }
}
console.log("## Properties on the prototype.")
for(let key in leo) {
  if (!leo.hasOwnProperty(key)) {
    console.log(`Key: ${key}. Value: ${leo[key]}`)
  }
}