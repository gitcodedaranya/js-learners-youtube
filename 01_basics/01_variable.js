const accountId = 1443;
let accountEmail = 'test@test.com';
var accountPassword = '123';
accountCity = 'Jaipur';
//accountId = 2;
accountEmail = 'testchange@gmail.com'
accountPassword = 'hh';
accountCity = 'Udaypur' // also be assigned like this but don't use it
let accountState ; 
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/* Prefer not to use var
because of issue in block scope & functional scope, Only use const & let */