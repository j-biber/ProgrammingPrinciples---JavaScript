/*Write a function to count vowels in a provided string. If you are  not aware of indexOf function, 
try to use switch statement.
Vowels are a, e, i, o, and u as well as A, E, I, O, and U.*/

function countVowels(string) {
  //var str = string.toLowerCase();
  var regex = /[aeiou]/gi;
  var vowels = string.match(regex);
  return vowels.length;
}
console.log(countVowels("jElenA"));

var countVowels = function(string) {
  //var str = string.toLowerCase();
  var regex = /[aeiou]/gi;
  var vowels = string.match(regex);
  return vowels.length;
};
console.log(countVowels("jElenA"));

/*Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]*/

var combineArrays = function(arr1, arr2) {
  var output = [];
  for (var i = 0; i < arr1.length; i++) {
    //one loop!
    output.push(arr1[i], arr2[i]);
  }
  return output;
};
console.log(combineArrays(["a", "b", "c"], [1, 2, 3]));

/*Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

function rotateElements(array, n) {
  var elementsToRotate = array.splice(0, n);
  var output = array.concat(elementsToRotate);
  return output;
}
console.log(rotateElements([1, 2, 3, 4, 5, 6], 2));

/*Write a function that takes a number and returns array of its digits.*/

function arrayOfNumberDigits(number) {
  var output = number
    .toString()
    .split("")
    .map(str => parseInt(str));
  return output;
}
console.log(arrayOfNumberDigits(15987));

//map(parseInt) returns the first number and other elements as NaN
// parseInt(string, radix) -> map(parseInt(value, index))
// first iteration (index is 0): parseInt('1', 0) // results in parseInt('1', 0) -> 1
// second iteration (index is 1): parseInt('2', 1) // results in parseInt('2', 1) -> NaN
// third iteration (index is 2): parseInt('3', 2) // results in parseInt('3', 2) -> NaN

function arrayOfNumberDigits(number) {
  var digits = number
    .toString()
    .split("")
    .map(Number); //Number function-constructor to convert numeric strings and null to numbers
  return digits;
}
console.log(arrayOfNumberDigits(1569));

/*Write a program that prints a multiplication table for numbers up to 12.*/

function multiplicationTable(n) {
  var res = "\n";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      res += i * j + " ";
    }
    res += "\n";
  }
  return res;
}
console.log(multiplicationTable(12));

/*Write a function to input temperature in Centigrade and convert to Fahrenheit.*/

function CelsiusToFarenheit(tempC) {
  var tempF = (tempC * 9) / 5 + 32;
  return tempF;
}
console.log(CelsiusToFarenheit(5));

/*Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/

//map(Number) returns 1 for true, 0 for false, NaN for non-numeric values
//filter(Number) returns true along with numbers

function maxNumberElement(array) {
  var output = [];
  var maxElement;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] == "number" && isFinite(array[i])) {
      output.push(array[i]);
      maxElement = Math.max(...output);
    }
  }
  return maxElement;
}
console.log(maxNumberElement([2, "555", true, false, 5, NaN, undefined, 18, "a", 65, 1, null]));

//
function maxNumberElement(array) {
  var numberElements = array.filter(n => typeof n == "number" && isFinite(n));
  var maxElement = Math.max(...numberElements);
  return maxElement;
}
console.log(
  maxNumberElement([
    2,
    "555",
    true,
    false,
    5,
    NaN,
    undefined,
    18,
    "a",
    65,
    1,
    null
  ])
);

/*Write a function to find the maximum and minimum elements. Function returns an array.*/

var minAndMaxElements = function(array) {
  var output = [];
  var numberElements = array.filter(n => typeof n == "number" && isFinite(n));
  var maxElement = Math.max(...numberElements);
  var minElement = Math.min(...numberElements);
  output.push(minElement, maxElement);
  return output;
};
console.log(
  minAndMaxElements([
    2,
    "555",
    true,
    false,
    5,
    NaN,
    undefined,
    18,
    "a",
    65,
    1,
    null
  ])
);

/*Write a function to find the median element of array.*/
function medianElement(array) {
  var median;
  var sortArray = array.sort((a, b) => a - b);
  var midIndex = Math.floor(sortArray.length / 2);

  if (sortArray.length % 2 !== 0) {
    median = sortArray[midIndex];
  } else {
    median = (sortArray[midIndex] + sortArray[midIndex - 1]) / 2;
  }
  return median;
}
console.log(medianElement([1, 4, 8, 6, 5]));


/*Write a function to find the element that occurs most frequently.*/

var mostFrequentElement = function (array) {
var element;
var minOccurance = 1;
var counter = 0;

for (var i = 0; i < array.length; i++){
  for (var j = i; j < array.length; j++){
    if (array[i] === array[j]){
      counter++;
    } if (minOccurance < counter) {
      minOccurance = counter;
      element = array[i];
    }
  }
  counter = 0;
}
return 'the most frequent element is ' + element + ' which occurs '+ minOccurance + ' times';
}
console.log(mostFrequentElement([1, 5, 'a','a', 1,'a', 8, 'a', 9, 1]));

//
function mostFrequentElement(array) {
  var mostFrequentElement = array.filter(e => Math.max(e.length));
  var count = mostFrequentElement.length;
  var element = mostFrequentElement.pop();
  return 'the most frequent element is ' + element + ' which occurs ' + count + ' times'
} console.log(mostFrequentElement([1, 5, 'a', 'a', 1, 'a', 8, 'a', 9, 1]));

//

function mostFrequent(arr) {
  var element = arr.sort((x, y) =>
    arr.filter(e => e === x).length -
    arr.filter(e => e === y).length
  ).pop();
  return element
}console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));


/*Write a function to find and return the first, middle and last element of an array if the array has odd 
number of elements. If number of elements is even, return just the first and the last. 
In other cases (empty array), input array should be returned.*/

var firstMidLastElement = function (array) {
  var first = array.shift();
  var last = array.pop();
  var midIndex = Math.floor(array.length / 2);
  var mid = array[midIndex];

  if (array.length == 0) {
    return array;
  }
  if (array.length % 2 == 0) {
    return first + ', ' + last;
  } else {
    return first + ', ' + mid + ', ' + last;
  }
}
console.log(firstMidLastElement([5, 8, 13, 6, 5, 7, 5, 9, 23]));

/*Write a function to find the average of N elements. Make the function flexible to receive 
dynamic number or parameters.*/

function average () {
var sum = 0;
var average;
var parameters = Array.from(arguments);

for (var i = 0; i < parameters.length; i++) {
  sum += parameters[i];
  average = sum / arguments.length;
}
return average;
}console.log(average(2,4,3));

/*Write a function to find all the numbers greater than the average.*/
function average() {
  var sum = 0;
  var average;
  var output = '';
  var parameters = Array.from(arguments);
  var numberOfParameters = arguments.length;

  for (var i = 0; i < numberOfParameters; i++) {
    sum += parameters[i];
    average = sum / numberOfParameters;

  }
  for (var j = 0; j < parameters.length; j++) {
    if (parameters[j] > average) {
       output += parameters[j] + ', ';
      //output.push(parameters[j]).toString();
    }
  }
  return output;

} console.log(average(2, 4, 3, 5, 1));


/*The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the 
height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, 
and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40*/
  
function BMI (height, weight) {
var BMI = weight/Math.pow(height, 2);
//Math.round(weight/Math.pow(height, 2));
var output;
if (BMI < 15) {
  output = BMI + ': starvation';
} else if (BMI > 15 && BMI < 17.5) {
  output = BMI + ': anorexic';
} else if (BMI > 17.5 && BMI < 18.5) {
  output = BMI + ': underweight';
}else if (BMI >= 18.5 && BMI < 25) {
  output = BMI + ': ideal';
}else if (BMI >= 25 && BMI < 30) {
  output = BMI + ': overweight';
}else if (BMI >= 30 && BMI < 40) {
  output = BMI + ': obese';
} else if (BMI >= 40) {
  output = BMI + ': morbidly obese';
}
return output;
}console.log(BMI(1.78, 80));


/*Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.
For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
********* */

var printInFrame = function (array) {
var result = '\n';

for (var i = 0; i < array.length; i++){
  result += array[i];
  result += '\n';
}
return result
}
console.log(printInFrame(["Hello", "World", "in", "a", "frame"]));

function printFrame(arr) {
  function fill(str, length, char) {
    console.log(str, length, char)
    return (str.length < length) ? fill(str + char, length, char) : str;
    
  }

  let size = arr.map((str) => {
    console.log(str.length)
    return str.length;
  })
    .reduce((a, b) => {
      return Math.max(a, b);
    });

  let line = fill('', size + 4, '*');

  arr = arr.map((element) => {
    return '* ' + fill(element, size, ' ') + ' *';
  })
  arr.unshift(line);
  arr.push(line);

  return arr.join('\n');;
}

console.log(printFrame(["Hello", "World", "in", "a", "frame"]));
