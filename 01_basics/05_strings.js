const name = "Aritra"
const repoCount = 10

console.log(name + repoCount + "Value"); // old style//now dont follow this syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `); // modern style , String Interpolation // follow this syntax 

const gameName = new String('Aritra-s-com') // this is another type of string declaration 

console.log(gameName[0]); // access key value pair
console.log(gameName.__proto__); // access prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //dont count the end number here 3 is the last counting number, 4 not count
console.log(newString);

const anotherString = gameName.slice(-7, 4) //here you can take Negative value
console.log(anotherString);

const newStringOne = "   aritra   "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove or tream whitespaces

const url = "https://aritra.com/aritra%20sarkar" // url e whitespace thakle ota browser automaticaly %20 kore dei link e aritra sarkar chilo bole ata aritra%20sarkar kore diyeche browser automatically

console.log(url.replace('%20', '-' )); // solution of remove %20

console.log(url.includes('aritra')); //check that words includes in url or not 
console.log(url.includes('sundar'));


console.log(gameName.split('-')); //split words in the basis of "-"


