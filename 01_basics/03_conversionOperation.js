let score = "33"
let score1 = "33abc"
let score2 = null
let score3 = undefined
let score4 = true
let score5 = false
let score6 = "Aritra"

console.log(typeof (score));

console.table([typeof score, typeof score1, typeof score2, typeof score3, typeof score4, typeof score5, typeof score6]);

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)
let valueInNumber6 = Number(score6)

console.table([typeof valueInNumber, typeof valueInNumber1, typeof valueInNumber2, typeof valueInNumber3, typeof valueInNumber4, typeof valueInNumber5, typeof valueInNumber6]);


console.table([valueInNumber, valueInNumber1, valueInNumber2,  valueInNumber3, valueInNumber4, valueInNumber5, valueInNumber6]);


//NaN meaning not a number
//when i convert "33abc" that string to number that is easily converted but the value is NaN so dont rely in  numbers .Nan is a special type
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
//"" => false; "Aritra" => true;

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);