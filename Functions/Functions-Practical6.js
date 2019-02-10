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
  for (var i = 0; i < arr1.length; i++) { //one loop!
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
console.log(rotateElements([1,2,3,4,5,6], 2));

/*Write a function that takes a number and returns array of its digits.*/

function arrayOfNumberDigits (number) {
    var output = number.toString().split('');
    return output;
}console.log(arrayOfNumberDigits(1));

//

function arrayOfNumberDigits (number) {
    var digits = number.toString().split('').map(Number); //Number function-constructor to convert numeric strings and null to numbers
    return digits;
}console.log(arrayOfNumberDigits(1569));


/* */
