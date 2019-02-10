/*Write a program that calculates the maximum of two given numbers.*/

var x = 5;
var y = 8;
var result;

function maximum() {
  if (x > y) {
    result = x;
  } else {
    result = y;
  }
}
maximum();

console.log(result);

/*Write a program that checks if a given number is odd.*/

var number = 4;
var result;

function isNumberOdd() {
  if (number % 2 !== 0) {
    result = "yes";
  } else {
    result = "no";
  }
}
isNumberOdd();

console.log(result);

/*Write a program that checks if a given number is a three digit long number.*/

var number = 1569;
var result;
function hasNumberThreeDigits() {
  if (number.length == 3) {
    result = "yes";
  } else {
    result = "no";
  }
}
hasNumberThreeDigits();

console.log(result);

/*Write a program that calculates an arithmetic mean of four numbers.*/

var a = 2;
var b = 5;
var c = 8;
var d = 3;

var result;

function arithmeticMean() {
  result = (a + b + c + d) / 4;
}
arithmeticMean();

console.log(result);

//

var numbers = [2, 5, 8, 3];
var total = 0;
var result;

function arithmeticMean() {
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
    result = total / numbers.length;
  }
}
arithmeticMean();

console.log(result);

/*Write a program that calculates a number of digits of a given number.*/

var number = 58;

var result;

function numberOfDigits() {
  var num = number.toString();
  result = num.length;
}
numberOfDigits();

console.log(result);

/*Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/

var array = [2, 4, 7, 8, 7, 7, 1];
var element = 7;

var result = 0;

function numberOfElementAppearances() {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == element) {
      result++;
    }
  }
}
numberOfElementAppearances();

console.log(result);

/*Write a program that calculates the sum of odd elements of a given array.*/

var array = [2, 4, 7, 8, 7, 7, 1];
var sum = 0;

function sumOfOddElements() {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
}
sumOfOddElements();

console.log(sum);

/*Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

var string = "knjIgOdRom";
var letter = "o";

var counter = 0;
function numberOfLetterAppeareances() {
  for (var i = 0; i < string.length; i++) {
    if (string[i] == letter || string[i] == letter.toUpperCase()) {
      counter++;
    }
  }
}
numberOfLetterAppeareances();

console.log(counter);

/*Write a program that concatenates a given string given number of times. For example, 
if “abc” and 4 are given values, the program prints out abcabcabcabc.*/

//var string = 'jelena';
//var numberOfRepeats = 3;

function concatenateString(string, numberOfRepeats) {
  if (numberOfRepeats == undefined) {
    numberOfRepeats = 1;
  }
  var output = "";
  for (var i = 0; i < numberOfRepeats; i++) {
    output += string;
  }
  console.log(output);
}
concatenateString("jelena", 3);

/*Write a program that draws a square of a given size. For example, if the size of square 
is 5 the program should draw: 
*****
*    *
*    *
*    *
*****
*/
function drawSquare(squareSize) {
  var square = "";
  for (var i = 0; i < squareSize; i++) {
    for (var j = 0; j < squareSize; j++) {
      if (i == 0 || i == squareSize - 1) { //ako je na prvoj ili poslednjoj poziciji
        square += "*";
      } else {
        if (j == 0 || j == squareSize - 1) {
          square += "*";
        } else {
          square += " ";
        }
      }
    }
    console.log(square);
    square = "";
  }
}
drawSquare(5);

/*Write a program that draws a horizontal chart representing three given values. 
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/
function horizontalChart () {
  var row = '';
  for (var i = 0; i < arguments.length; i++){
    for (var j = 0; j < arguments[i]; j++){
      row += '*';
    }
    console.log(row);
    row = '';
  }
}horizontalChart(1,2,3);
