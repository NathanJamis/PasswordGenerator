// Begin function and prompt user for desired password length
function generatePassword() {
  setLength = parseInt(prompt('Enter password length from 8 to 128 characters'));

  if (setLength < 8 || setLength > 128) {
    return "Password length must be between 8 and 128 characters";
  }

  // Confirms to establish criteria
  var hasLower = confirm("Should password have lowercase letters? Press OK for yes, Cancel for no");
  var hasUpper = confirm("Should password have uppercase letters? Press OK for yes, Cancel for no");
  var hasNumber = confirm("Should password have numbers? Press OK for yes, Cancel for no");
  var hasSymbol = confirm("Should password have symbols? Press OK for yes, Cancel for no");

  // Set variable strings
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper= "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  var number = "0123456789";
  var symbol = "~!@#$%^&*()-+";

  // Blank variables as placeholders for later concatenation
  var password = "";

  var criteria = "";
 
  //If statements to determine user criteria
  if (!hasLower && !hasUpper && !hasNumber && !hasSymbol) {
    return "Password must have one set of criteria"
  }
  if (hasLower === true) {
    criteria += lower;
  }
  if (hasUpper === true) {
    criteria += upper;
  }
  if (hasNumber === true) {
    criteria += number;
  }
  if (hasSymbol === true) {
    criteria += symbol;
  }
 
  // For loop to determine characters for password
  for (i = 0; i < setLength; i++) {
    var randomChar = criteria[Math.floor(Math.random() * criteria.length)];

    password += randomChar;
  }

  return password;

}

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
