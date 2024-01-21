const accountId = 144553
let accountEmail = "sarkararitra687@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId= 2 // not allowed

accountEmail = "srakar@ar.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block and functional scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity,accountState])