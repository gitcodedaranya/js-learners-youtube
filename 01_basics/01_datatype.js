let name = 'Asohk'; //string datatype
let age= '12'; //number datatype
let IsLoggedIn = false //boolean datatype

// number
// bigint
// boolean => true/false
// null => Standalone value
// undefined =>
// symbol => unique
//console.log(typeof null) //object
//console.log(typeof undefined) //undefined

// --------
//let score = 33;
//let score = "33";
//let score = "33abc"
//let score = null
//let score = undefined
//let score = true
let score = "ashoke"

//console.log(typeof score);

let valueNumber=Number(score)
//console.log("afterNumberPrint: "+valueNumber); // Nan if let score = "33abc"
// "33" => 33
// "33abc" ==> NaN
// true => 1; false =>0;
//console.log("typeof: "+typeof valueNumber);


//let IsLoggedInV = 1;
//let IsLoggedInV = "";
let IsLoggedInV = "Ashok";
let BooleanIsLoggedIn = Boolean(IsLoggedInV)
//console.log(BooleanIsLoggedIn);
// 1 => true; 0 => false;
// "" => false; "Ashok"=> true

let someNumber = 33
let StringNumber = String(someNumber)
// console.log(StringNumber)
// console.log("typeof: "+typeof StringNumber);

// ********************* Operations *********************
let value=3
let negetiveVal = -value
//console.log(negetiveVal)

let str1 = "Hello"
let str2 =" Ashoke"
let str3 = str1+str2 
//console.log(str3)
//console.log((3+4) * 5 % 3) //2

//Link to study : https://tc39.es/ecma262/multipage/abstract-operations#sec-type-conversion

// ********************* from W3schools *********************
//A JavaScript variable can hold any type of data. 

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
