/*Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false*/
function isString(input) {
  if (typeof input === "string") {
    return true;
  } else {
    return false;
  }
}
console.log(isString("jelena"));

/*Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false*/
function isStringBlank(input) {
  if (typeof input === "string" && input.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isStringBlank(""));

/*Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa" */

function concatenateString(string, count) {
  if (typeof count === "undefined") {
    count = 1;
  }
  if (count <= 0) {
    return string;
  }
  var result = "";
  for (var i = 0; i < count; i++) {
    result += string;
  }
  return result;
}
console.log(concatenateString("ha", 5));

/*Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/
function letterOccurance(string, letter) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter++;
    }
  }
  return counter;
}
console.log(letterOccurance("jelena", "e"));

//var result = letterOccurance('jelena', 'e');
//console.log(result);

/*Write a function to find the position of the first occurrence of a character in a string.
The result should be in human numeration form. If there are no occurrences of the character,
the function should return -1.*/

function firstcharacterOccurance(string, char) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === char) {
      var result = i + 1;
      break;
    } else {
      result = -1;
    }
  }
  return result;
}
console.log(firstcharacterOccurance("aleksandra", "l"));

/*Write a function to find the position of the last occurrence of a character in a string. 
The result should be in human numeration form. If there are no occurrences of the character,
function should return -1.*/

function lastCharacterOccurance(string, char) {
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] === char) {
      var result = i + 1;
      break;
    } else {
      result = -1;
    }
  }
  return result;
}
console.log(lastCharacterOccurance("topolska18sobapodstanara", "s"));

/*Write a function to convert string into an array. Space in a string should be represented 
as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]*/

function stringToArray(string) {
  var array = string.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i] === " ") {
      array[i] = null;
    }
  }
  return array;
}
console.log(stringToArray("some string"));

/*Write a function that accepts a number as a parameter and checks if the number is prime 
or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive 
divisors other than 1 and itself.*/

function isNumberPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2) {
    return true;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isNumberPrime(37));

/*Write a function that replaces spaces in a string with provided separator. 
If separator is not provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"*/

function stringSeparator(string, separator) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (string[i] === " ") {
      newString += separator;
    } else {
      newString += letter;
    }
  }
  return newString;
}
console.log(stringSeparator("some string", "+"));

/*Write a function to get the first n characters and add “...” at the end of 
newly created string.*/

function stringFragment(string, char) {
  var newString = "";
  for (var i = 0; i <= char; i++) {
    var letter = string[i];
    newString += letter;
  }
  return newString + "...";
}
console.log(stringFragment("javascript", 5));

//

function stringFragment(string, char) {
  var output = "";
  for (var i = 0; i < string.length; i++) {
    var element = string[i];
    output += element;
    if (i === char - 1) {
      output += "...";
      break;
    }
  }
  return output;
}
console.log(stringFragment("javascript", 5));

/* Write a function that converts an array of strings into an array of numbers. 
Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]*/

//var array = ["1", "21", undefined, "42", "1e+3", Infinity];

function stringToNumber(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var number = parseInt(element);
    //output = parseInt(element);
    //var newArray = [];
    //if (isFinite(element) == false && element != undefined && element != null){
    /*array[i].isNaN() != true NaN checked in isFinite*/
    //}
    if (!isNaN(number) && isFinite(number)) {
    }
    output.push(number);
  }
  return output;
}
console.log(stringToNumber(["1", "21", undefined, "42", "1E3", Infinity]));

//

function filterNonNumbers(inputArray) {
  var numArray = [];
  var positionFixer = 0;

  for (var index = 0; index < inputArray.length; index++) {
    var element = inputArray[index];
    var number = parseFloat(element);

    if (!isNaN(number) && isFinite(number)) {
      numArray[index - positionFixer] = number;
    } else {
      positionFixer++;
    }
  }

  return numArray;
}

var output = filterNonNumbers(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(output);

/*Write a function to calculate how many years there are left until retirement based on 
the year of birth. Retirement for men is at age of 65 and for women at age of 60. 
If someone is already retired, a proper message should be displayed.*/

function yearsLeftToRetirement(yob, gender) {
  var output;
  var currentYear = new Date().getFullYear();
  var retirementMale = 65;
  var retirementFemale = 60;
  if (gender == "m") {
    output = retirementMale - (currentYear - yob);
  } else if (gender == "f") {
    output = retirementFemale - (currentYear - yob);
  }
  return output;
}
console.log(yearsLeftToRetirement(1986, "f"));

/*Write a function to humanize a number (formats a number to a human-readable string) with 
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th*/

//TO CHECK

function humanizeNumber(n) {
  var suffix = "";
  var output = "";

  // if (Number.isInteger(n) == true){
  //     var number = n.toString();
  //     //console.log(number);
  // }
  for (var i = 0; i < n.length; i++) {
    var lastNumber = n[n.length - 1];
    //console.log(lastNumber);
    if (n <= 10 || n >= 20) {
      switch (lastNumber) {
        case 0:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          //suffix = 'th';
          output = n + "th";
          //console.log(number+'th');
          break;

        case 1:
          //suffix = 'st';
          output = n + "st";
          //console.log(number+'st')
          break;

        case 2:
          //suffix = 'nd';
          output = n + "nd";
          //console.log(number+'nd')
          break;

        case 3:
          //suffix = 'rd';
          output = n + "rd";
          //console.log(number+'rd')
          break;
      }
    } else if (n > 10 || n < 20) {
      //suffix = 'th';
      output = n + "th";
      //console.log(number+'th');
    }
    output = number + "th";
    //console.log(number+suffix);
  }
  return output;
}
console.log(humanizeNumber(10));

//
//Hint: num % 100 >= 11 && num % 100 <= 13
//
function humanizeNumber(num) {
  if (typeof num == "undefined") {
    return;
  }

  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }

  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
  }
  return num + "th";
}
console.log(humanizeNumber(45));
