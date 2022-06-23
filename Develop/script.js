// Assignment Code
var generateBtn = document.querySelector("#generate");
var specCharacters = [ "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var alphabet = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers =[0,1,2,3,4,5,6,7,8,9,];


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var caps = confirm("Would you like the password to contain Capital letters");//slice second half
  var low= confirm("Would you like the password to contain lowercase letters");//slice first half
  var spec =confirm("Can the password contain special characters such as !@$&");
  var nums = confirm("Would you like the password to contain numbers");
  var passLength = prompt("Choose how many characters the password can contain. (please choose a number 8-128)")

  function generatePassword(){
  }
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// match() slice() math.floor(x) math.random(x)