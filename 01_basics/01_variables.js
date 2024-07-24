/* NOTES
Variables and Data Types

const = can't be re-assigned a value and can't be declared again  (block scope)

let = can be re-assigned a value but can't be declared again (block scope)

var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
console.table([group of variables you want to show in tabular form])
*/

const accountId = 12345
let accountEmail = "veeresh@veeresh.com"
var accountPassword = "12345"
accountCity = "Delhi"

console.log("Before modifying the values");
console.table([accountId, accountEmail, accountPassword, accountCity])
// accountId = 3 // can't change the const values

accountEmail = "veeresh@google.com"
accountPassword = "232323"
accountCity = "Bengaluru"
console.log("After modifying the value");
console.table([accountId, accountEmail, accountPassword, accountCity])

