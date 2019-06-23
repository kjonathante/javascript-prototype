let animal = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce

/*
rabbit
  walk: ƒ ()
  __proto__:
    eats: true
    walk: ƒ walk()
    __proto__:
      constructor: ƒ Object()
      hasOwnProperty: ƒ hasOwnProperty()
      isPrototypeOf: ƒ isPrototypeOf()
      propertyIsEnumerable: ƒ propertyIsEnumerable()
      toLocaleString: ƒ toLocaleString()
      toString: ƒ toString()
      valueOf: ƒ valueOf()
*/