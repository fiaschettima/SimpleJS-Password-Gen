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
  if(!nums && !spec && !low && !caps){
    alert("atleast one character type must be selected");
      caps = confirm("Would you like the password to contain Capital letters");
      low= confirm("Would you like the password to contain lowercase letters");
      spec =confirm("Can the password contain special characters such as !@$&");
      nums = confirm("Would you like the password to contain numbers");
  }

  var passLength = prompt("Choose how many characters the password can contain. (please choose a number 8-128)");
  // prompts user to enter number 8-128 repeat if value outside condition 
  while(passLength < 8 || passLength > 128){
    alert("Password is not within the acceptable amount of characters");
    passLength = prompt("Enter a number greater than 8 and less than 128");
  }

  console.log(usedVals);
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword(){

    for(var i = 0; i  < passLength; i++){
      // console.log(Math.floor(Math.random() * usedVals.length));
       password += usedVals[Math.floor(Math.random() * usedVals.length)];
    }
    return password;
  }
  usedVals=[];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


