let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreateddate = new Date(2025, 0 ,3)
//console.log(myCreateddate.toDateString());

let myCreatedAnotherdate = new Date(2025, 0 , 5 ,13, 5)
//console.log(myCreatedAnotherdate.toLocaleString());

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myCreatedAnotherdate.getTime());

console.log(Math.floor(myTimestamp/100));

let Anotherdateformat = myDate.toLocaleString('defaule', {
    weekday: 'narrow'
})
console.log(Anotherdateformat);