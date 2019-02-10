/*Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"*/

function insertString(inputString, string, index) {
  var defaultIndex = 1;

  if (typeof index === "undefined") {
    index = defaultIndex;
  }

  return (
    inputString.slice(0, index) + " " + string + " " + inputString.slice(index)
  );
}
console.log(insertString("Some string", "insert", 8));

/* The slice() method extracts a section of a string 
and returns it as a new string, without modifying the original string.*/

//

function insert(main_string, ins_string, pos) {
  if (typeof pos == "undefined") {
    pos = 0;
  }
  //     if(typeof(ins_string) == "undefined") {
  //      ins_string = '';
  //    }
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}
//console.log(insert('We are doing some exercises.'));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

//

function insert_string(a, b, n) {
  var position_before = "";
  var position_after = "";
  var i;
  var result;
  for (i = 0; i < a.length && i < n; i++) {
    position_before += a[i];
  }
  for (i = n + 1; i < a.length; i++) {
    position_after += a[i];
  }
  result = position_before + b + position_after;
  return result;
}
var final_result = insert_string("jelena svemira", "je kraljica", 6);
console.log(final_result);

/*Write a program to join all elements of the array into a string skipping elements that are undefined, 
null, NaN or Infinity. [NaN, 0, 15, false, -22, '', undefined, 47, null]*/

function joinArrayElementsToString(inputArray) {
  var output = "";

  for (var i = 0; i < inputArray.length; i++) {
    if (
      !isNaN(inputArray[i]) &&
      typeof inputArray[i] != "undefined" &&
      isFinite(inputArray[i]) == true &&
      inputArray[i] != null
    ) {
      output += inputArray[i];
    }
  }
  return output;
}
console.log(
  joinArrayElementsToString([NaN, 0, 15, false, -22, "", undefined, 47, null])
);

/*Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]*/

/* false, 0, and ""
When comparing any of the three falsy values with loose equality (==), they will always be equal! 
That’s because these values will all coerce into a false boolean.
False, zero, and empty string all technically have the same value, when typecasted. If you need to strictly treat them, you can use === */

function filterFalsyValues(inputArray) {
  var skipElement = 0;
  var output = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == null || inputArray[i] == false) {
      skipElement++;
    } else if (isNaN(inputArray[i]) || !isFinite(inputArray[i])) {
      skipElement++;
    } else {
      output.push(inputArray[i]);
    }
  }

  return output;
}

var newArray = filterFalsyValues([
  NaN,
  0,
  15,
  false,
  -22,
  "",
  undefined,
  47,
  null
]);
console.log(newArray);

//
function filterFalsyValues(inputArray) {
  var output = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (
      !isNaN(inputArray[i]) &&
      typeof inputArray[i] != "undefined" &&
      inputArray[i] != false &&
      inputArray[i] != null
    ) {
      //output += inputArray[i];
      output.push(inputArray[i]);
    }
  }
  return output;
}
console.log(
  filterFalsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null])
);

/*Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number. */

function reverseNumber(number) {
  //var number = number + ''; //kad se string doda broju, sve postaje string
  var number = number.toString();
  var output = "";

  for (var i = number.length - 1; i >= 0; i--) {
    output += number[i];
  }
  var reversedNumber = parseFloat(output);
  return reversedNumber;
}
console.log(reverseNumber(12345));

// step by step with built=in functions

function reverseNumber(inputNumber) {
  var number = inputNumber.toString();
  var splitStringNumber = number.split("");
  var reverseStringNumber = splitStringNumber.reverse();
  var joinReversedStringNumber = reverseStringNumber.join("");

  var reversedNumber = parseFloat(joinReversedStringNumber);

  return reversedNumber;
}
console.log(reverseNumber(12345));

// !

function reverseNumber(inputNumber) {
  var number = inputNumber
    .toString()
    .split("")
    .reverse()
    .join("");

  var reversedNumber = parseFloat(number);

  return reversedNumber;
}
console.log(reverseNumber(12345));

/*Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/

function lastArrayElements(array, n) {
  var output = [];

  for (var i = array.length - 1; i >= 0; i--) {
    if (n == 1 || n == undefined) {
      //if n == null
      output = array[array.length - 1];
    } else if (n > array.length) {
      output = "The parametar must be a number between 1 and " + array.length;
    } else {
      output = array.slice(array.length - n);
    }
  }
  return output;
}
console.log(lastArrayElements([7, 9, 0, -2], 3));

/*Write a function to create a specified number of elements with pre-filled numeric value array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function createArray(n, element) {
  var output = [];

  for (var i = 0; i <= n; i++) {
    if (typeof element == "undefined") {
      element = null;
    } else {
      output.push(element);
    }
  }
  return output;
}
console.log(createArray(5));

/*Write a function that says whether a number is perfect. 28 -> 28 is a perfect number.*/
/*A perfect number is a positive integer that is equal to the sum of its proper positive divisors, i.e., the sum of its positive divisors 
excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its 
positive divisors (including itself).
1+2+4+7+14 = 28 or (1+2+4+7+14+28)/2 = 28*/

function isNumberPerfect(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp === number && temp !== 0) {
    console.log(number + " is a perfect number.");
  } else {
    console.log(number + " is not a perfect number.");
  }
}
isNumberPerfect(28);

/*Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"*/

function stringWordCount(string, word) {
  var result;
  var counter = 0;
  var testArray = string.split(" "); //space between '' for breaking down elements, without space letter by letter is split
  console.log(testArray);
  for (var i = 0; i < testArray.length; i++) {
    if (testArray[i] == word) {
      counter++; // ? it doeas't count
      result = word + " was found " + counter + " times.";
    }
  }
  return result;
}
console.log(stringWordCount("aa, bb, cc, dd, aa", "aa"));

//!!! split method doesn't work with punctuation !!! works with example 1 only - fox

// if (string.match(word)){ RegEx ???
//     counter++
//     result = word + ' was found ' + counter + ' times.';
// }

// var paragraph = 'aa, bb, cc, dd, aa';
// var regex = /aa/gi;
// var found = paragraph.match(regex);
// console.log(found)

function stringWordCount(string, word) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  var regex = new RegExp(word, "gi"); //The RegExp constructor creates a regular expression object for matching text with a pattern.
  //global match; find all matches rather than stopping after the first match
  //i ignore case; if u flag is also enabled, use Unicode case folding
  var count = string.match(regex);
  return word + " was found " + count.length + " times.";
}
console.log(stringWordCount("aa, bb, cc, dd, AA", "aa"));

// look into ???
function searchWordCount(text, word) {
  var x = 0;
  var y = 0;

  for (i = 0; i < text.length; i++) {
    if (text[i] == word[0]) {
      for (j = i; j < i + word.length; j++) {
        if (text[j] == word[j - i]) {
          y++;
        }
        if (y == word.length) {
          x++;
        }
      }
      y = 0;
    }
  }
  return "'" + word + "' was found " + x + " times.";
}

console.log(searchWordCount("The quick brown fox", "fox"));
console.log(searchWordCount("aa, bb, cc, dd, aa", "aa"));

/*Write a function to hide email address.
"myemailaddress@bgit.rs" -> "myemail...@bgit.rs" */

function hideEmailAddress(emailAddress) {
  var split = "@";
  var indexOfSplit = emailAddress.indexOf(split);
  var hiddenEmail;

  var str1 = emailAddress.substring(0, 4);
  var str2 = emailAddress.substring(indexOfSplit);

  //hiddenEmail = str1 + '...' + str2;
  hiddenEmail = str1.concat("...", str2);

  return hiddenEmail;
}
console.log(hideEmailAddress("jelena@gmail.com"));

//

function protectEmailAddress(emailAddress) {

  var output = '';
  var hiddenEmail = '';
  var split = '@';
  var indexOfSplit = emailAddress.indexOf(split);

  for (var i = 0; i < indexOfSplit; i++) {
    if (i < 4) {
    output += emailAddress[i];
    hiddenEmail = output + '...';
    }
  }
  for (var j = indexOfSplit; j < emailAddress.length; j++) {
    hiddenEmail += emailAddress[j];
  }
  return hiddenEmail;
} console.log(protectEmailAddress('jelena@gmail.com'));

/*Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]*/

function mostFrequentArrayElement(array) {
  var output;
  var frequency = 1;
  var counter = 0;
  var element;

  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        counter++;
      }
      if (frequency < counter) {
        frequency = counter;
        element = array[i];
      }
    }
    counter=0;
  }
    output = element + " ( " + frequency + " times ) "
    return output;
}console.log(mostFrequentArrayElement([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
