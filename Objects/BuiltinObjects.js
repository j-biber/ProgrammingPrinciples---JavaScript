/*Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
'ff', 16, 8 -> 377*/

function convertNumberRadix(number, Initialradix, cahangeRadix) {
  if (
    (Initialradix && cahangeRadix < 2) ||
    (Initialradix && cahangeRadix > 36)
  ) {
    return "Radix between 2 and 36";
  }

  var number = parseInt(number, Initialradix);
  return number.toString(cahangeRadix);
}
console.log(convertNumberRadix("ff", 16, 8));

/*Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
12345 -> 54321*/

function reverseNumber(number) {
  var reversedNumber = number
    .split("")
    .reverse()
    .join(""); //.trim() removes whitespaces
  return parseInt(reversedNumber);
}
var result = reverseNumber("12345");
console.log(typeof result);

/*Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.*/

function sortStringAlphabetically(string) {
  return string
    .split("")
    .sort()
    .join("");
}
console.log(sortStringAlphabetically("flowers"));

/*Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the 
letters so they are sorted from A to Z. "Republic Of Serbia" -> "Rbceilpu Of Sabeir"*/

function alphabetizeString(string) {
  return string
    .split("")
    .sort()
    .join("")
    .trim();
}
console.log(alphabetizeString("Republic of Serbia"));

/*Write a function to split a string and convert it into an array of words.
"John Snow" -> [ 'John', 'Snow' ]*/

function splitString(string) {
  return string.split(" ");
}
console.log(splitString("John Snow"));

/* Write a function to convert a string to its abbreviated form. 
"John Snow" -> 	"John S."*/

function abbreviateString(string) {
  var string = string.split(" ");
  var output = string[0] + " " + string[1][0] + ".";
  return output;
}
console.log(abbreviateString("John Snow"));

//

var abbrevName = function(inputString) {
  var splitNames = inputString.trim().split(" ");
  if (splitNames.length > 1) {
    return splitNames[0] + " " + splitNames[1].charAt(0) + ".";
  }
  return splitNames[0];
};

// Test
var input = "John Snow";
var result = abbrevName(input);
var expectedResult = "John S.";

// Output
console.log(abbrevName("John Snow"));

/*Write a function that can pad (left, right) a string to get to a determined length.
'0000', 123, 'l' -> 0123 
'00000000', 123, 'r' -> 12300000*/

function formattedString(pad, inputString, padPosition) {
    if (typeof inputString === "undefined") {
        return pad;
    }
    if (padPosition == "l") {
        return (pad + inputString).slice(-pad.length);
    } else {
        return (inputString + pad).substring(0, pad.length);
    }
}

console.log(formattedString("0000", 123, "l")); // 0123
console.log(formattedString("00000000", 123, "")); //12300000

/*Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises"*/

function capitalizeFirstLetter (string) {
return string.charAt(0).toUpperCase() + string.slice(1)
}console.log(capitalizeFirstLetter("js string exercises"));

/*Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" -> "somerand...@example.com"*/

function protectEmail (emailAddress) {
var split = emailAddress.split('@');
var emailName = split[0];
var emailDomain = split[1];
var hideEmailName = emailName.substring(0, emailName.length/2)
return hideEmailName + '...@' + emailDomain;
}console.log(protectEmail('somerandomaddress@example.com'));

/*Write a program that accepts a string as input and swaps the case of each character. For example, 
if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"*/

function swapCase (str) {
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = []; 

    for (var x = 0; x < str.length; x++) {
        if (UPPER.indexOf(str[x]) !== -1) {
            result.push(str[x].toLowerCase());
        } else if (LOWER.indexOf(str[x]) !== -1) {
            result.push(str[x].toUpperCase());
        } else {
            result.push(str[x]);
        }
    }

    return result.join('');
}console.log(swapCase("The Quick Brown Fox" ));