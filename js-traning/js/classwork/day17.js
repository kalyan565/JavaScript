// <!-- ## Step-by-step value assignment



// **Line executed:**
// ```javascript
// throw new ValidationError("age", "Must be non-negative")
// ```



// ### Inside `ValidationError` constructor:
// ```javascript
// constructor(field, message) {  // field = "age", message = "Must be non-negative"
//   super(message, "VALIDATION_FAILED");  // passes "Must be non-negative" and "VALIDATION_FAILED" UP to AppError
//   this.field = field;  // assigns "age" to this.field
// }
// ```



// ### Inside `AppError` constructor:
// ```javascript
// constructor(message, code) {  // message = "Must be non-negative", code = "VALIDATION_FAILED"
//   super(message);  // passes "Must be non-negative" UP to Error
//   this.name = this.constructor.name;  // assigns "ValidationError" to this.name
//   this.code = code;  // assigns "VALIDATION_FAILED" to this.code
// }
// ```



// ### Inside `Error` constructor (built-in):
// ```javascript
// // Built-in Error constructor takes the message and stores it as this.message
// this.message = message;  // message = "Must be non-negative"
// ```



// ## Final object:
// ```javascript
// {
//   message: "Must be non-negative",  // from Error constructor
//   name: "ValidationError",          // from AppError
//   code: "VALIDATION_FAILED",        // from AppError  
//   field: "age"                      // from ValidationError
// }
// ```



// ## Why `[VALIDATION_FAILED] age: Must be non-negative`?
// - `e.code` → `"VALIDATION_FAILED"`
// - `e.field` → `"age"`  
// - `e.message` → `"Must be non-negative"`



// The catch block just prints them in that order. -->





class Rectangle{
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
  scale(fact) {
    this.width = this.width * fact;
    this.height *= fact;
  }
}
const re = new Rectangle(2, 3);
console.log(re.area); 
re.scale(2);
console.log(re  .area); 