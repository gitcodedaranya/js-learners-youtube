// There are two types of data types based on How data is stored in memory and how it is accessed

// Primitive
// 7 Types - String, Number, Boolean, null, undefined, Symbol, Bigint

const id = Symbol("123")
const anotherId = Symbol("123")
const outsidetemp = null
const BigNum = 258965969853589698n
console.log(id === anotherId)

//Non primitive or reference Type
// Array, Objects, Functions, 

const heros = ["Saktiman","Nagraj", "Spiderman"];  //Array
let details = {
    name:"Ashok",
    age:"23",
}  // Objects

const myFunction = function(){
    console.log("hello");
}

console.log(typeof BigNum) //undefined
console.log(typeof outsidetemp) //object
console.log(typeof myFunction)  // function

// Link: https://262.ecma-international.org/5.1/#sec-11.4.3