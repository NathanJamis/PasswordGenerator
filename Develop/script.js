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

var setLength;
var useLower;
var useUpper;
var useNumber;
var useSymbol;

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
  setLength = prompt('Enter password length from 8 to 128 characters')
  console.log(setLength);
// if no criteria selected, display alert
  if (!setLength) {
    alert('Please enter a password length between 8 to 128 characters')
  }
  // if not 8-128, display alert
  else if (setLength < 8 || setLength > 128) {
    setLength = prompt('Length must be between 8 and 128 characters')
    console.log(setLength);
  }
// if within, begin confirms...
  else {
// confirm lowercase
  useLower = confirm('Should password have lowercase letters? Press OK for yes, Cancel for no.')
  console.log(useLower);
// confirm uppercase
  useUpper = confirm('Should password have uppercase letters? Press OK for yes, Cancel for no.')
  console.log(useUpper);
// confirm numbers
  useNumbers = confirm('Should password have numbers? Press OK for yes, Cancel for no.')
  console.log(useNumbers);
// confirm symbols
  useSymbols = confirm('Should password have special characters? Press OK for yes, Cancel for no.')
  console.log(useSymbols);
  }
// display password to field

// Ending of function
};