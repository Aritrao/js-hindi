// Primitive datatypes  => call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// language not defined in javascript
// decimal value also under number category, here decimal nothing different

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 44146344654564654649n  // big int


//Reference (Non primitive) => call by reference

// Array, Objects, Function

const heros = ["shaktiman", "nagraj", "doga"] //array
//object 
let myObj = {
    name: "Aritra",
    age: 22,
}
//object is under parenthesis

//function
//function returns functions thats called object function
//non primitive datatypes return type is  function thats call function object

const myFunction = function(){
    console.log("Hello World");
}

console.table([typeof score, typeof scoreValue, typeof isLoggedIn, typeof outsideTemp, typeof userEmail, typeof bigNumber, typeof myFunction, typeof heros, typeof anotherId])