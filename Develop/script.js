// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Random generators
function randomLower() {
  return  
}

function randomUpper() {

}

function randomNumber() {
  return Math.floor
}

function randomSymbol() {

}

// Begin password generator function

function generatePassword() {
// Prompt password length

// if not 8-128, display alert

// if within, begin confirms...

// confirm lowercase

// confirm uppercase

// confirm numbers

// confirm symbols

// if no criteria selected, display alert

// display password to field

// Ending of function
};