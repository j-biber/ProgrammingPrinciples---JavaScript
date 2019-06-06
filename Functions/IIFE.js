/*Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]*/

var replaceElements = (function(array) {
  var first = array.shift();
  var last = array.pop();
  array.push(first);
  array.unshift(last);
  return array;
})([4, 5, 11, 9]);
console.log(replaceElements);
console.log(typeof replaceElements)(
  /*Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20*/

  function(a, b) {
    var rectangleSurface = a * b;
    console.log(rectangleSurface);
  }
)(4, 5);
//
var rectangleSurface = (function(a, b) {
  return a * b;
})(4, 5);
console.log(rectangleSurface);

/*Write IIFE that replaces all appearances of the letters m or M with * and returns the number of 
replacements. Input: prograMming | Output: progra**ing, 2*/

var replaceLetters = (function(text, letter) {
  var output = "";
  var inputLowerCase = text.toLowerCase();
  var inputUpperCase = text.toUpperCase();
  for (var i = 0; i < text.length; i++) {
    var element = text[i];
    if (inputLowerCase[i] == letter || inputUpperCase[i] == letter) {
      element = "*";
    }
    output += element;
  }
  return output;
})("prograMming", "m");
console.log(replaceLetters);

//
(function(text) {
  var letter = /m/gi;
  var output = text.replace(letter, "*");
  console.log(output);
})("prograMming");

/*Write a function with parameters name and surname that returns a function that suggests an email in 
the form name.surname@gmail.com. 
Input: pera peric
Output: pera.peric@gmail.com*/

var emailSuggestion = (function(name, surname) {
  return name + "." + surname + "@gmail.com";
  //console.log(name + '.' + surname + '@gmail.com')
})("pera", "peric");
console.log(emailSuggestion);
//
(function(name, surname) {
  console.log(name + "." + surname + "@gmail.com");
})("pera", "peric");

/*Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28*/

function numberValue(x) {
  //console.log('the decimal value is: ');
  return function() {
    console.log(parseInt(x, 10));
  };
}
numberValue(034)();
// var result = numberValue(034);
// result();

/*Write a function that checks if a given string is valid password. The password is valid if it is at 
least 6 characters long and contains at least one digit. The function should receive two callbacks named 
successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!*/

function valid() {
  console.log("Success!");
}
function invalid() {
  console.log("Your password is invalid!");
}
function isPasswordValid(password) {
  var regex = /\d/g; //var regex = /[0-9]/g;
  var isNumberIncluded = password.match(regex);
  if (password.length >= 6 && isNumberIncluded != null) {
    return valid();
  } else {
    return invalid();
  }
}
isPasswordValid("JSguru");

//

function success() {
  console.log("Your password is cool!");
}

function error() {
  console.log("Your password is invalid!");
}

function checkPassword(password, successCallback, errorCallback) {
  var lengthCheck;
  var digitCheck;

  if (password.length >= 6) {
    lengthCheck = true;
  } else {
    lengthCheck = false;
  }

  // "34abc"
  // "3" --> 3
  // "a" --> NaN

  digitCheck = false;

  for (var i = 0; i < password.length; i++) {
    var character = password[i];

    // "3", "9" --> 3, 9,
    // NaN
    var value = parseInt(character);

    if (isNaN(value) == false) {
      digitCheck = true;
      break;
    }
  }

  if (lengthCheck == true && digitCheck == true) {
    successCallback();
  } else {
    errorCallback();
  }
}

checkPassword("abcdefgh1", success, error);

/*Write a function that filters elements of the given array so that they satisfy a condition given 
by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

function isNumberOdd(element) {
  if (element % 2 != 0) {
    return element;
  }
}
function filterArrayElements(array) {
  var output = array.filter(isNumberOdd);
  return output;
}
console.log(filterArrayElements([2, 8, 11, 4, 9, 3]));

//
function filterArrayElements(array) {
  var output = array.filter(element => element % 2 != 0);
  return output;
}
console.log(filterArrayElements([2, 8, 11, 4, 9, 3]));
