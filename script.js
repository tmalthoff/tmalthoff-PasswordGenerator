// Assignment Code
var generateBtn = document.querySelector("#generate");

var numString = "0123456789";
var numArray = numString.split("");
console.log(numArray);
var lowerString = "abcdefghijklmnopqrstubwxyz";
var lowerArray = lowerString.split("");
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var upperArray = upperString.split("");
var specialString = "!@#$%^&*()"
var specialArray = specialString.split("")

function askForOptions() {
  var length = parseInt(prompt("how long?"));

  if(isNaN(length) === true) {
    alert("please enter a number");
    return;
  }
  if(length < 8) {
    alert("please enter a number higher than 8");
    return;
  }
  if(length > 128) {
    alert("please enter a number less than 128");
    return;
  }


  

 var isNum = confirm("add numbers?");
 var isLower = confirm("add lower?");
 var isUpper = confirm("add Upper?");
 var isSpecial= confirm("add special?");

 if(isNum === false && isLower === false && isUpper === false && isSpecial === false) {
   alert("Please select one character type")
 }

 var options = {
   length: length,
   isNum,
   isUpper,
   isSpecial,
   isLower
 }

 return options

}

function generatePassword() {
  var options = askForOptions();

  var superArray = [];
  var resultsArray = [];

  if(options.isNum === true) {
    superArray = superArray.concat(numArray)
  }

  if(options.isLower === true) {
    superArray = superArray.concat(lowerArray)
  }

  if(options.isUpper === true) {
    superArray = superArray.concat(upperArray)
  }

  if(options.isSpecial === true) {
    superArray = superArray.concat(specialArray)
  }
  console.log(superArray)

  for(var i = 0; i < options.length; i++) {
    var index = Math.floor(Math.random() * superArray.length);
    console.log(index)
    var randomDigit = superArray[index];
    resultsArray.push(randomDigit)
    
  }
  return resultsArray.join("")


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
