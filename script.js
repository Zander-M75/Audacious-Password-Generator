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


var characters = "0123456789" + "ABCDEFGHIJKLMNOPQURSTUVXYZ" + "abcdefghijklmonpqrstuvwxyz" + "!@#$%^&*()"

var maxLength = 128
var minLength = 8




function generatePassword(){
  var passwordLength = 10
  var containsLowerCase = true
  var containsUpperCase = true
  var containsNumbers = true
  var containsSymbols = true
  var characters = "" 
  characters += "0123456789" 
  characters += "ABCDEFGHIJKLMNOPQURSTUVXYZ" 
  characters += "abcdefghijklmonpqrstuvwxyz" 
  characters += "!@#$%^&*()"

  var password = "";
  for (var length = 0; length < passwordLength; length += 1){
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
 
  return password;
  
}



