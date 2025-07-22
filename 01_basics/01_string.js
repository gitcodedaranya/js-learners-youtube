const name="Ashok"
const Repocount = 5

//console.log(name + Repocount + " Value")  //old patern
console.log(`My name is ${name} and repocount is ${Repocount}`);

const gameName = new String("Ashok")
// console.log(gameName[0]);
// //console.log(gameName.__proto.__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,3)
console.log(newString);

const AnothernewString = gameName.slice(-4,3)
console.log(AnothernewString);

const NewStringOne = "    Ashok    "
console.log(NewStringOne.trim());

const url = "https://ashok.com/ashok%20test"
console.log(url.replace('%20', '-'));

const AnotherName = "George-brush-game"
console.log(AnotherName.split("-"));