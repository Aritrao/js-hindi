const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const old_heros = ["shaktiman", "nagrajj"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3]);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...old_heros] // spread method for adding two array element
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)// when you want all array in one array in this situation then use flat and infity select all depth
console.log(real_another_array);

console.log(Array.isArray("Aritra")); // that means that is array or not
console.log(Array.from("Aritra")); // from convert values to a array
console.log(Array.from({name: "aritra"})); // interesting that returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // that returns a new array from a set of elements