// Assignment Code
var generateBtn = document.querySelector("#generate");
var specCharacters = [ "!", "#","$","%","&","(",")","*","+","-","/","<","?","=",">","@","{","}","_"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaCaps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers =["0","1","2","3","4","5","6","7","8","9"];
// set of arrays to pick characters from
var usedVals= [];
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // confirm boxes to choose yes or no to set character types if yes var = true no var = false
  var caps = confirm("Would you like the password to contain Capital letters");
  var low= confirm("Would you like the password to contain lowercase letters");
  var spec =confirm("Can the password contain special characters such as !@$&");
  var nums = confirm("Would you like the password to contain numbers");


// checks value of true or false if true adds that array to new array if all false muse choose again
  if(caps){
    usedVals = usedVals.concat(alphaCaps);
  }
  if(low){
    usedVals = usedVals.concat(alphabet);
  }
  if(spec){
    usedVals = usedVals.concat(specCharacters);
  }
  if(nums){
    usedVals = usedVals.concat(numbers);
  }
  // all values are false meaning used array would be empty stop here and have to restart
  if(!nums && !spec && !low && !caps){
    alert("atleast one character type must be selected");
    return;
  }

  var passLength = prompt("Choose how many characters the password can contain. (please choose a number 8-128)");
  // prompts user to enter number 8-128 repeat if value outside condition 
  while(passLength < 8 || passLength > 128){
    alert("Password is not within the acceptable amount of characters");
    passLength = prompt("Enter a number greater than 8 and less than 128");
  }

  // console.log(usedVals);   unnote to check that array is being filled properly
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword(){
// picks random values from used vals array as long as the counter i is less than the length selected since it starts at 0
    for(var i = 0; i  < passLength; i++){
       password += usedVals[Math.floor(Math.random() * usedVals.length)];
    }
    return password;
  }
  // resets array to empty incase you decide to hit the genrate button again 
  usedVals=[];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


