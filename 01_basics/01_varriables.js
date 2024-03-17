const accountID = 1234;
let accountEmail = "akhil.thepade@gmail.com"
var accountPassword = "54321";
/*
    Prefer not to use var - becuase of issue in block scope and functional scope
*/

accountCity = "Jaipur";
let accountState;

//accountID = 567; // not allowed



// accountEmail = "akhil@prometteur.in";
// accountPassword = "7890";
// accountCity = "Pune";

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);