const marvel_heros = ["thor", "IronMan","SpiderMan"]
const dc_heros = ["superman","flash" ,"batman"]
const lang = ["c","c++","java"]

//push
/marvel_heros.push(dc_heros)      
console.log(marvel_heros);        // ['thor','IronMan','SpiderMan',['superman','flash','batman']]
console.log(marvel_heros[3][0]);  // batman

//concat
// const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros);  //['thor','IronMan','SpiderMan','superman','flash','batman']

// spred 
// const all_new_heros = [...dc_heros,...marvel_heros,...lang]
// console.log(all_new_heros); //['superman','flash','batman','thor','IronMan','SpiderMan','c','c++','java']


//flat
// const another_array = [1,2,3,[4,5,6],7,[8,[1,2,3]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);  //[1,2,3,4,5,6,7,8,1,2,3]

//isArray and from
// console.log(Array.isArray([1,2,3]))         //true
// console.log(Array.isArray("Veeresh"))       //false
// console.log(Array.from("Veeresh"))          //it will convert to array['V','e','e','r','e','s','h']
// console.log(Array.from({name : "Veeresh"})) //[]

//of
const age = 30;
const name = "Veeresh"
const isLogged = false

console.log(Array.of(age,name,isLogged)); //[ 30, 'Veeresh', false ]