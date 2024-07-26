// Arrays
const myArray =  [1,2,3,4,5,6,7]
// console.log(myArray);    /*[1, 2, 3, 4,5, 6, 7]*/

const codingLanguage = ["c","c++","Java"]
// console.log(codingLanguage);   /*[ 'c', 'c++', 'Java' ]*/

const myArray1 = new Array(0,2,3,4,2,1)
// console.log(myArray1); /* [ 0, 2, 3, 4, 2, 1 ] */


/*---------------------------------- Array Methods ----------------------------- */

const myArrays =  [1,2,3,4,5,6,7]

// --------Push---------
// console.log(myArrays);   //    [ 1, 2, 3, 4,5, 6, 7]
// myArrays.push(10)        // -> will add the value to the end of the array
// console.log(myArrays);   //    [ 1, 2, 3,  4, 5, 6, 7, 10]


//---------Pop-----------
// console.log(myArrays);     //   [ 1, 2, 3, 4,5, 6, 7]
// myArrays.pop()             // -> not required any valur -> will add the value to the end of the array
// console.log(myArrays);     //   [ 1, 2, 3,  4, 5, 6]


//---------unshift-----------
// console.log(myArrays);    //   [ 1, 2, 3, 4,5, 6, 7]  
//myArrays.unshift(11)      /* ->  will add the value at the bigining of the array 
//                                  beacuse of this entire array need to shift there index*/ 
// console.log(myArrays);    //[11, 1, 2, 3,4, 5, 6, 7]


//---------Shift-----------
// console.log(myArrays);       //   [ 1, 2, 3, 4,5, 6, 7]  
// myArrays.shift()             /* It will remove the valur from the begining of the array */
// console.log(myArrays);       //   [2, 3, 4,5, 6, 7]  



// -------include---------
// console.log(myArrays.includes(5)); // ths will check the valus is present or not (result in boolean)
// console.log(myArrays.indexOf(4));  /* It will give the index value 
                                     //   if not found it will print -1 */

// ------ converting to string
// const newArray =  myArrays.join()  // convert array 

// console.log(myArrays);     // [ 1, 2, 3, 4,5, 6, 7]
// console.log(newArray);     // 1, 2, 3, 4,5, 6, 7
// console.log(typeof newArray);  string


//---------SLICE / SPLICE ----------------

// *******slice*******
// console.log("a", myArrays);       //    a [1,2,3,4,5,6,7]
// const mna1 = myArrays.slice(1,3)  // -> it will start from the given index 1, end in 3rd index, 
                                     //  -> it will not include the 3rd index, won't efect original arraya
// console.log(mna1);                //      [2,3]
// console.log("b", myArrays);       //    b [1,2,3,4,,5,6,7]


// *********splice*********
console.log("a", myArrays);            //    a [1,2,3,4,5,6,7]
const mna2 = myArrays.splice(1,3)      // -> it will start from givrn index and include the end idex
                                       // ->  it will efect the original array
console.log(mna2);                     //     [2,3]
console.log("b", myArrays);            //    b [ 1, 5, 6, 7]

