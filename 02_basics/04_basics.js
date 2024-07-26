// const instaUser = new Object() //single ton 
// console.log(instaUser);

const tinderUser = {}  //creating a boject

tinderUser.id = "abc123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: 'abc123', name: 'Sam', isLoggedIn: false }

const regularUser = {
    email : "user@gmail.com",
    fullName : {
                    userName : {
                                    firstName : "Sam",
                                    lastName : "reddy"
                               }
               }
}

// console.log(regularUser.fullName); // { userName: { firstName: 'Sam', lastName: 'reddy' } }
// console.log(regularUser.fullName.userName); //{ firstName: 'Sam', lastName: 'reddy' }
// console.log(regularUser.fullName.userName.firstName); //Sam
// console.log(regularUser.fullName.userName.lastName); //reddy

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

// const obj4 = {obj1, obj2, obj3}
// console.log(obj4);
    /*
        {
            obj1: { '1': 'a', '2': 'b' },
            obj2: { '3': 'c', '4': 'd' },
            obj3: { '5': 'e', '6': 'f' }
        }
    */

// assign : is used to combine one or more object
const res = Object.assign({},obj1,obj2,obj3)  // combine obj1, obj2, obj3 (copying all 3 obj into {} ) to res
// console.log(res); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// spread : using this also we can combine one or more object
const res1 = {...obj1, ...obj2, ...obj3}
// console.log(res1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//object in array

const user = [
    {   
    id : 1,
    email : "user@gmial.com"
    },
    {   
    id : 1,
    email : "user@gmial.com"
    },
    {   
    id : 1,
    email : "user@gmial.com"
    }
]

// console.log(user[1].email)

//Object keys, values and more
const instaUserOne = {}
instaUserOne.id = "123"
instaUserOne.name = "Ajay"
instaUserOne.isLoggedIn = true

console.log(instaUserOne); //{ id: '123', name: 'Ajay', isLoggedIn: true }

console.log(Object.keys(instaUserOne)); // keys : [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUserOne)); // values : [ '123', 'Ajay', true ]
console.log(Object.entries(instaUserOne)); // Array of each key value pair : [ [ 'id', '123' ], [ 'name', 'Ajay' ], [ 'isLoggedIn', true ] ]

//checking is value exits or not
console.log(instaUserOne.hasOwnProperty('id')); // true hasOwnProperty : it will check the x`keys


// Ojecte - De -Structuring

const course = {
    courseName : "JS",
    instructor : "Hitesh",
    price : 999
}

// de structuring the object
const {instructor : ins} = course

console.log(ins);