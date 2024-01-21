console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1); // comparision of different data types, in that type of comparison predictable result is not found cause of different datatypes 
console.log("02" > 1); // comparision of different data types, in that type of comparison predictable result is not found cause of different datatypes 

console.log(null > 0); // avoid this type of comparision
console.log(null == 0); // avoid this type of comparision
console.log(null >= 0); // avoid this type of comparision

//  the reason is that an equality check == and comparisions >, <, >= ,<= work differently. 
// comparisions convert null to a number,treating it as 0. That's why (3)null >= 0 is true and (1)null > 0 is false.

// comparision and equality check is different

console.log(undefined == 0); // avoid this type of comparision
console.log(undefined > 0); // avoid this type of comparision
console.log(undefined < 0); // avoid this type of comparision

console.log("2" === 2);
// === (strict check) =>that check also datatypes







