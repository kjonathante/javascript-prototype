There are actually only two limitations:

The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
The value of __proto__ can be either an object or null, other types (like primitives) are ignored.
