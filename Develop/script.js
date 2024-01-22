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
var characterPool = []
var guaranteedCharacters = []
var password = []

//function to obtain password requirements from user
function generatePassword() 
{
  var passwordlength = prompt("How many characters would you like your password to contain? (must be between 8-128 characters long)");
  
  //statement to test above prompt is a number, if true result then alert is triggered and prompt ends
  if (isNaN(passwordlength)) {
    alert("Please submit numerical value.");
    return null;
  }

  console.log(passwordlength)

  //statement to test if minimum length was selected, if true then alert is triggered and prompt ends
  if (passwordlength < 8) {
    alert("Please select a length greater than 8.")
    return null;
  }

  //statement to test if maximum length was exceeded, if true then alert is triggered and prompt ends
  if (passwordlength > 128) {
    alert("Please select a length less than 128.")
    return null;
  }

  //asking to include special characters. if yes, add random specical character to guaranteedCharacters array. Then add specialCharacters array to characterPool array
  var specialChar = confirm("Do you want to include special characters?");

  if (specialChar) {
    var randomSpecialCharacterindex = Math.floor(Math.random()* specialCharacters.length);
    guaranteedCharacters.push(specialCharacters[randomSpecialCharacterindex]);
    characterPool = specialCharacters.concat(characterPool);
    
  }

  console.log(randomSpecialCharacterindex)
  console.log(guaranteedCharacters)
  console.log(characterPool)

  //asking to inlude lower case. if yes, add random lower case character to guranteedCharacters array. Then add lowerCaseCharacters array to characterPool array
  var allowLowercase = confirm("Do you want to allow lower case characters");

  if (allowLowercase) {
    var randomLowerCaseIndex = Math.floor(Math.random()* lowerCaseCharacters.length);
    guaranteedCharacters.push(lowerCaseCharacters[randomLowerCaseIndex]);
    characterPool = lowerCaseCharacters.concat(characterPool);
  }

  console.log(randomLowerCaseIndex)
  console.log(guaranteedCharacters)
  console.log(characterPool)

  //asking to inlude upper case. if yes, add random upper case character to guranteedCharacters array. Then add upperCaseCharacters array to characterPool array
  var allowUppercase = confirm("Do you want to allow upper case characters");

  if (allowUppercase) {
    var randomUpperCaseIndex = Math.floor(Math.random()* upperCaseCharacters.length);
    guaranteedCharacters.push(upperCaseCharacters[randomUpperCaseIndex]);
    characterPool = upperCaseCharacters.concat(characterPool);
  }

  console.log(randomLowerCaseIndex)
  console.log(guaranteedCharacters)
  console.log(characterPool)

  //asking to inlude numbers. if yes, add random numerical character to guranteedCharacters array. Then add numericalCharacters array to characterPool array
  var allowNumbers = confirm("Do you want to allow numerical characters");

  if (allowNumbers) {
    var randomNumbersIndex = Math.floor(Math.random()* numericalCharacters.length);
    guaranteedCharacters.push(numericalCharacters[randomNumbersIndex]);
    characterPool = numericalCharacters.concat(characterPool);
  }

  if (specialChar === false && allowLowercase === false && allowUppercase === false && allowNumbers === false) {
    alert("Please choose at least 1 group of characters.");
  } 

  console.log(randomNumbersIndex)
  console.log(guaranteedCharacters)
  console.log(characterPool)

  for (let i = 0; i < (passwordlength - guaranteedCharacters.length); i++) {
    forLoopCharacters = Math.floor(Math.random()* (passwordlength - guaranteedCharacters.length));
    password.push(characterPool[forLoopCharacters]);
    console.log(i);

  }
  //converting final password from array to string with no commas.
  finalPassword = guaranteedCharacters.concat(password)
  console.log(finalPassword)
  var finalPasswordstring = finalPassword.join("");
  console.log(finalPasswordstring)
  alert("Here is your secure password: " + finalPasswordstring)
  return null
  

  
  
  /*var characterList = []
  if (specialChar){
    characterList = characterList.concat(specialCharacters)
  }
  if (allowLowercase) {characterList = characterList.concat(lowerCaseCharacters)}
  if (allowUppercase) {characterList = characterList.concat(upperCaseCharacters)}
  if (allowNumbers) {characterList = characterList.concat(numericalCharacters)}
  console.log(characterList)*/
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
