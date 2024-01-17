var numberofChar = 5
var allowLowercase = true/false
var specialChar = true/false
var allowUppercase = true/false
var allowNumbers = true/false

//arrays to be included in password
var specialCharacters = ["!","@","#","$","%","&","*","<",">","?"]
var lowerCaseCharacters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
var upperCaseCharacters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var numericalCharacters = ["0","1","2","3","4","5","6","7","8","9"]

//function to obtain password requirements from user
function generatePassword() 
{
  var passwordlength = prompt("How many characters would you like your password to contain? (must be between 8-128 characters long)");
  
  //statement to test above prompt is a number, if true result then alert is triggered and prompt ends
  if (isNaN(passwordlength)) {
    alert("Please submit numerical value");
    return null;
  }

  //statement to test if minimum length was selected, if true then alert is triggered and prompt ends
  if (passwordlength < 8) {
    alert("Please select a length greater than 8")
    return null;
  }

  //statement to test if maximum length was exceeded, if true then alert is triggered and prompt ends
  if (passwordlength > 128) {
    alert("Please select a length less than 128")
    return null;
  }


  var specialChar = confirm("Do you want to include special characters?");

  if (specialChar === true)


  var allowLowercase = confirm("Do you want to allow lower case characters");
  var allowUppercase = confirm("Do you want to allow upper case characters");
  var allowNumbers = confirm("Do you want to allow numerical characters");

  var characterList = []
  if (specialChar){
    characterList = characterList.concat(specialCharacters)
  }
  if (allowLowercase) {characterList = characterList.concat(lowerCaseCharacters)}
  if (allowUppercase) {characterList = characterList.concat(upperCaseCharacters)}
  if (allowNumbers) {characterList = characterList.concat(numericalCharacters)}
  console.log(characterList)
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
