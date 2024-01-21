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

// ******************* Operations **********************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // to the power symbol => **
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " Aritra"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


// conversion er first value string thakle sob value kei string dhore neoya hoi r string last e thakle first e je conversion thakbe ota hoye jabe then string add hobe

// dont use this type of code cause this type of code not acceptable in google, amazon etc.

console.log((3+4) * 5 % 3); // use parenthesis or bracket like this type of conversion

console.log(+true);   // dont do this type of conversion
console.log(+"");   // dont do this type of conversion

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2  // dont do this type of tricky conversion 

let gameCounter = 100
let gameCounter1 = 100

gameCounter++;
++gameCounter1;
console.table([gameCounter, gameCounter1]);

// link to study
// https://tc39.es/ecma262/#sec-intro



