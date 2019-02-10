/*Write a function that converts an array of strings into an array of numbers. 
Filter out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/

function stringsToNumbers(array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        var element = parseFloat(array[i]);
        if (isFinite(element)) { // !isNan(element) covered by isFinite
            output.push(element); //isFinite() function determines whether the passed value is a finite number
        }
    }
    return output
} console.log(stringsToNumbers(["1", "21", undefined, false, null, "42", "1e+3", Infinity]));

/* Write a program to join all elements of the array into a string skipping elements that are 
undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false-2247”*/

function arrayToString(array) {
    var output = '';
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] != undefined && array[i] != null) {
            output += array[i];
        }
    }
    return output;
} console.log(arrayToString([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/*Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]*/

function filterFalsyValues (array) {
var output = [];
for (var i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && array[i] != undefined && array[i] != null && array[i] != false) {
        output.push(array[i]);
    }
}
return output;
}console.log(filterFalsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// Andjelka

function arrayWithoutFalsy(array) {
    var i;
    var newArray = [];
    var j = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] != false && array[i] != 0 && array[i] != undefined
            && array[i] != null && !isNaN(array[i])) {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var newArray = arrayWithoutFalsy(array);
console.log(newArray);


/* Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/

function numberOfIntegers (array) {
var counter = 0;
for (var i = 0; i < array.length; i++){
    if (Number.isInteger(array[i])) {
        counter ++;
    }
}
return counter;
}console.log(numberOfIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

//

function numberOfIntegers(array) {
var counter = 0;
for (var i = 0; i < array.length; i++) {
    var integer = parseInt(array[i]); 
    if (!isNaN(integer) && integer == array[i]) {
        counter ++;
    }
}
return counter;
} console.log(numberOfIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));


/*Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2*/

function numberOfFloatValues(array) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        var float = parseFloat(array[i]);
        if (!isNaN(float) && float % 1 !== 0) {
            counter++;
        }
    }
    return counter;
} console.log(numberOfFloatValues([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
