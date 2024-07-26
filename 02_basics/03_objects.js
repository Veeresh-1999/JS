// object creation 


//symbol
const key = Symbol("myKey")

const JSUser = {
    name : "Veeresh",
    age : 24,
    [key] : "key1",
    "full address" : "gadag Karnataka",
    location : "Karnataka",
    email : "Veeresh@gmail.com",
    isLoggedIn : false,
    holidays : ["Saturday", "Sunday"]
}

// console.log(JSUser.name);                    // Veeresh
// console.log(JSUser["email"]);                // Veeresh@gmail.com
// console.log(JSUser.age);                     // 24
// console.log(JSUser["full address"]);         // gadag Karnataka
// console.log(JSUser[key]) //To access symbol  // key1 
// console.log(typeof JSUser.key)               // undefined
// console.log(JSUser["holidays"]);             // [ 'Saturday', 'Sunday' ]

// console.log(JSUser);
    /* 
  {
    name: 'Veeresh',
    age: 24,
    'full address': 'gadag Karnataka',
    location: 'Karnataka',
    email: 'Veeresh@gmail.com',
    isLoggedIn: false,
    holidays: [ 'Saturday', 'Sunday' ],
    [Symbol(myKey)]: 'key1'
   }
    */


JSUser.email = "Veeresh123@gmail.com"
// console.log(JSUser["email"]);  // Veeresh123@gmail.com

// Object.freeze(JSUser)  // Use to freeze the object value

JSUser.email = "Veeresh123@gmail.com"
// console.log(JSUser["email"]);  // Veeresh123@gmail.com



// Function()
JSUser.greeting = function() {
    console.log("Hello");
}

// console.log(JSUser.greeting);   // [Function (anonymous)]
// console.log(JSUser.greeting()); // Hello


JSUser.greetingTwo = function() {
    console.log(`Hello ${this.name}, Good Morning`);
    console.log(`Holidays on ${this.holidays}, Enjoy`);
}

console.log(JSUser.greetingTwo);    // [Function (anonymous)]
console.log(JSUser.greetingTwo());  // Hello Veeresh, Good Morning
                                    // Holidays on Saturday,Sunday, Enjoy 