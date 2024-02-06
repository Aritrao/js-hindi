// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[1]);

// Array methods

myArr.push(6) // push new values
myArr.push(7) // push new values
myArr.pop() // delete last values in the array

myArr.unshift(9) // value add in the 0th position means first position in the array
myArr.shift() // delete first values in the array

console.log(myArr.includes(9)); // includes check that the value is in the array present or not
console.log(myArr.indexOf(19)); // indexof checks that the which value in in which position
console.log(myArr.indexOf(4))

const newArr = myArr.join() // bind the values and change the array type object to String

console.log(myArr);
console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const mynewArray1 = myArr.slice(1, 3)

console.log(mynewArray1);
console.log("B", myArr);

const mynewArray2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(mynewArray2);
// splice manipulate original array values ,splice delete total range values in the array 
// if the range is (1-3) slice print 1-2 th position values not print the last range values means 3 and splice print the 1-3 th positions value means print also the last range values and also delete 1-3 th positions value to the array.