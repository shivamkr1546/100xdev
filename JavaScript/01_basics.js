const accountId = 12345 
let accountEmail = "shivamsk1546@gmail.com" // This is used as this is scope friendly and can be reassigned
var accountPassword = "12345678"
/*
  -var: Prefer not to use var
  because of issue in block scope and functional scope.
*/

accountCity = "Delhi" // Allowed as JavaScript allows undeclared variables, but it's not a good practice

// accountId = 67890; // This will throw an error because const variables cannot be reassigned

accountEmail = "kumarshivam@gmail.com" // Allowed as let variables can be reassigned
accountPassword = "87654321"
accountCity = "Mumbai"

console.log(accountId) // 12345   

console.table([accountId, accountEmail, accountPassword, accountCity]) // Displays the values in a table format
