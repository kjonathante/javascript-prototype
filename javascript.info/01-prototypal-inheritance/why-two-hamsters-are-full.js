/*
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
*/

const hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push(food);
    this.stomach = [food]
  }
};

const speedy = {
  //stomach: [],
  __proto__: hamster
};

const lazy = {
  //stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( "speedy", speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( "lazy", lazy.stomach ); // apple