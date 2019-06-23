(function(){
  function Car() {}
  car1 = new Car();
  car2 = new Car();
   
  console.log(car1.__proto__.color) //undefined
  console.log(car2.__proto__.color) //undefined
  console.log(car1.color)  // undefined
  console.log(car2.color) // undefined
  
  /*
    {
      color: "Red"
      constructor: ƒ Car()
      __proto__: Object

    }
  */
 Car.prototype.color = "original color";
  /*
    {
      color: "original color"
      constructor: ƒ Car()
      __proto__: Object
    }
  */

  console.log(car1.__proto__.color) //original color
  console.log(car2.__proto__.color) //original color
  console.log(car1.color)  // original color
  console.log(car2.color) // original color
  return ""
})()
