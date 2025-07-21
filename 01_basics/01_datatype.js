let name = 'Asohk'; //string datatype
let age= '12'; //number datatype
let IsLoggedIn = false //boolean datatype

// number
// bigint
// boolean => true/false
// null => Standalone value
// undefined =>
// symbol => unique
console.log(typeof null) //object
console.log(typeof undefined) //undefined

// --------
//let score = 33;
//let score = "33";
let score = "33abc"
console.log(typeof score);

let valueNumber=Number(score)
console.log(valueNumber);
console.log(typeof valueNumber);


//A JavaScript variable can hold any type of data. // from W3schools

let x = "16" + "Volvo"; //When adding a number and a string, JavaScript will treat the number as a string.
console.log(x) // 16Volvo

let y= "Volvo" + 16; 
 console.log(y) // Volvo16

 let xy = 16 + 4 + "Volvo";  //JavaScript evaluates expressions from left to right. Different sequences can produce different results:
  console.log(xy)  // 20Volvo

   let yx = "Volvo" + 16 + 4;
    //In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
    //In the second example, since the first operand is a string, all operands are treated as strings. 
    console.log(yx)  // Volvo164
