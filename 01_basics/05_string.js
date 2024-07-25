const name = "Veeresh"
const country = "India"

console.log(`Hello I am ${name}, from ${country}`)

const gameName = new String('Veeresh-s-a')
console.log(gameName[2]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString = gameName.substring(1,4)
console.log(newString);

const newLength = gameName.slice(-1, 4)
console.log(newLength);

let newStringOne = "       Veeresh S Annagire    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "google.com.js"
console.log(url.replace('.',''));


const password = "veeresh@1999";

// Regular expressions for checking conditions
const hasUpperCase = /[A-Z]/.test(password);
const hasLowerCase = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);

const res =  (hasUpperCase && hasLowerCase && hasNumber)? "Matched":"Not Matched";
console.log(res);


//string to array
const username = "Veeresh-S-Annagire"
console.log(username.split('-'));