// const arr = [1,2,3]
// console.log(Object.getPrototypeOf(arr))
// //Array.prototypeconsole.log(Object.getPrototypeOf(Array.prototype));      
//  //       // Object.prototypeconsole.log(Object.getPrototypeOf(Object.prototype));   
//  //         // null// Chain://   arr  →  Array.prototype  →  Object.prototype  →  null//   |          |                
//  //    |//   own        map, filter,        toString, hasOwnProperty, ...//   props      reduce, ...
//  // //// That's why arr.map(...) works — it lives on Array.prototype.
//  // // And arr.toString() works — found two steps up on Object.prototype.


//  const  vehicle = {
//     start() {
//         console.log(`${this.name} starting`);
//     };
//  }

//  const car = Object.create(vehicle);
//  car.name = "Texon"

//  const bike = Object.create(vehicle)
//  bike.name = "Royal Enfield"

//  car.start();
//  bike.start();
// car.start();   // "Tata Nexon starting"bike.start(); 
// //  // "Royal Enfield starting"//
// //  Own vs inheritedconsole.log(car.hasOwnProperty("name")); 
// //    // true  ← car.name is ownconsole.log(car.hasOwnProperty("start")); 
// //   // false ← inherited from vehicleconsole.log("start" in car);             
// //    // true  ← found on chain


const tool = {
    useTool() {
        console.log("Using a tool")
    }
}

const vehicle = Object.create(tool)

vehicle.drive = function() {
    console.log("vehicle")
}

const car = Object.create(vehicle);

car.start = function() {
    console.log("car started ")
}

car.start();
car.drive();
car.useTool();
