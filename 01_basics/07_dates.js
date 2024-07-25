/*--------- Date and Time------------*/

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

//user date
let myCurrentDate = new Date(2023,0,23,4,5,56)
// console.log(myCurrentDate.toDateString());
// console.log(myCurrentDate.toLocaleString());

let myCurrentDateOne = new Date("2023-10-31")
// console.log(myCurrentDateOne.toLocaleString());

/*----- TimeStamp --------------*/

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCurrentDateOne.getTime());
// console.log(myCurrentDateOne.getHours());
// console.log(Math.floor(Date.now()/1000));  // converting  to second

/*=----------------------------------------------------------------------=*/

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getFullYear());

/*=----------------------------------------------------------------------=*/

newDate.toLocaleString('default', {
    weekday: "long",
    
})