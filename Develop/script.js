// Assignment Code
var generateBtn = document.querySelector("#generate");
var specCharacters = [ "!", "#","$","%","&","(",")","*","+","-","/","<","?","=",">","@","{","}","_"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var alphaCaps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers =[0,1,2,3,4,5,6,7,8,9,];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var caps = confirm("Would you like the password to contain Capital letters");//sets values to true or false dependent on answer
  var low= confirm("Would you like the password to contain lowercase letters");
  var spec =confirm("Can the password contain special characters such as !@$&");
  var nums = confirm("Would you like the password to contain numbers");

  var passLength = prompt("Choose how many characters the password can contain. (please choose a number 8-128)");
  // prompts user to enter number 8-128 repeat if value outside condition 
  while(passLength < 8 || passLength > 128){
    alert("Password is not within the acceptable amount of characters");
    passLength = prompt("Enter a number greater than 8 and less than 128");
  }

  function generatePassword(caps, low, spec, passLength){
    for(var i = 0; i  <= passLength; i++){
       password += Math.floor(Math.random() + arraynameofwhatcharatersbeigused.length);
    }
    return password;
  }
}
  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// match() slice() math.floor(x) math.random(x)