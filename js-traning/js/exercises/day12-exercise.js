// function safeParse(str) {
//     try {
//         const data = JSON.parse(str);
//         return data
//     }
//     catch (err){
//         console.log("invalid JSON :", err.message);   
//         return null;
//     }
// }

// console.log(safeParse('{"name":"Priya"}'));
// console.log(safeParse('{"name":"Priy'));


// function setAge(age) {
//     if(typeof age != "number") 
//         throw "age must be a number"
//     if(age > 120) 
//         throw "age must be 0–120"
//     else 
//         return age;
// }

// try {
//     console.log(setAge(20));
//     console.log(setAge("twenty"));
//     console.log(setAge(200));
// }
// catch(err) {
//     console.log(err);
// } finally {
//     console.log("shock ayyara")
// }

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "Validation Error"
    }
}

function validateEmail(email) {
    if(!email.includes('@')) {
        throw new ValidationError("invalid email error");
    }
    return "valid email"
}

try {
    console.log(validateEmail("kalyan@.gmas"));
    console.log(validateEmail("kalyan.gmas"));

} catch(err) {
    if(err instanceof ValidationError) {
        console.log("validation failed",err.message)
    }
}
