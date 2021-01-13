
function generatePassword() {
  setLength = parseInt(prompt('Enter password length from 8 to 128 characters'));

  if (setLength < 8 || setLength > 128) {
    alert("Error")
    return "Password length must be between 8 and 128 characters";
  }

 var hasLower = confirm("Should password have lowercase letters? Press OK for yes, Cancel for no");
 var hasUpper = confirm("Should password have uppercase letters? Press OK for yes, Cancel for no");
 var hasNumber = confirm("Should password have numbers? Press OK for yes, Cancel for no");
 var hasSymbol = confirm("Should password have symbols? Press OK for yes, Cancel for no");

 var lower = "abcdefghijklmnopqrstuvwxyz";
 var upper= "ABCDEFGHIJKLMOPQRSTUVWXYZ";
 var number = "0123456789";
 var symbol = "~!@#$%^&*()-+";

 var password = "";

 var criteria = "";

 if (hasLower) {
  criteria += lower;
 }
 if (hasUpper) {
  criteria += upper;
 }
 if (hasNumber) {
  criteria += number;
 }
 if (hasSymbol) {
  criteria += symbol;
 }
 else {
   alert("Error")
   return "Password must have at least one criteria set"
 }

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
