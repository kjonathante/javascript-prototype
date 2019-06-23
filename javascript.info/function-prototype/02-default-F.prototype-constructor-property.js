// Every function has the "prototype" property even if we don’t supply it
// The default "prototype" is an object with the only property constructor 
// that points back to the function itself.
function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

Rabbit.prototype.constructor === Rabbit

// If F.prototype is an object,
// then new operator uses it to set [[Prototype]] for the new object.
const rabbit = new Rabbit();

rabbit.constructor === Rabbit

// We can use constructor property to create 
// a new object using the same constructor as the existing one.
const rabbit2 = new rabbit.constructor()