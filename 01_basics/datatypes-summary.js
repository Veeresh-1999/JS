/*-----------------------------------Primitive-----------------------------------*/  


//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //-> flase

const bigNumber = 3456543576654356754n

//check type of
// console.log(typeof score);       // -> number
// console.log(typeof scoreValue);  // -> number
// console.log(typeof isLoggedIn);  // -> boolean
// console.log(typeof outsideTemp); // -> object
// console.log(typeof userEmail);   // -> undefined
// console.log(typeof bigNumber);   // -> bigint

/*---------------------------------Reference (Non primitive)--------------------------------------*/

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//check type of
console.log(typeof heros);       // -> object
console.log(typeof myFunction);  // -> function

/*------------------Memory management----------------------*/
// Stach (Primitive), Heap(non-primitive)

//primitive
let javaScript = "hiteshchoudhary.com"
let javaScriptOther = javaScript

console.log(javaScriptOther)
javaScriptOther = "chaiourcode.com"


console.log(javaScript);



//Non - primitive

let userOne =
{
    userEmail:"Userone@google.com",
    course : "JS",
}

let userTwo = userOne

userTwo.userEmail = "userTwo@google.com"

console.log(userOne.userEmail);
console.log(userTwo.userEmail);