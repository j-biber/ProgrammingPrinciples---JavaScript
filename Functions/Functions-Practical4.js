/*Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no*/

function arrayContainsElement(array, element) {
  var output;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      output = "yes";
      break;
    } else {
      output = "no";
    }
  }
  return output;
}
console.log(arrayContainsElement([5, -4.2, 18, 7], 3));

function arrayContainsElement(array, element) {
  if (array.includes(element)) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(arrayContainsElement([5, -4.2, 19, 7], 3));

/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

function multiplyPositiveElements(array, multiplier) {
  var newArray = [];
  var newElement;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newElement = array[i] * multiplier;
      //console.log(newElement)
    } else {
      newElement = array[i];
      //console.log(newElement)
    }
    newArray.push(newElement);
    //console.log(newArray);
  }
  return newArray;
}
console.log(multiplyPositiveElements([-3, 11, 5, 3.4, -8], 2));

/*Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

function minArrayElementAndIndex (array) {
  var min = array[0];
  var newMin;
  var index;
  for (var i = 1; i < array.length; i++){
    if (array[i] < min) {
        newMin = array[i];
        index = i;
    }
  }
  return newMin + ',' + index;

}console.log(minArrayElementAndIndex([4, 2, 2, -1, 6]));

//

function minArrayElementAndIndex(array) {
  var min = Math.min(...array); //ES2015 the new spread operator- causes the values in the array to be expanded, or “spread”, into the function’s arguments.
  //OR Math.min.apply(null, array)- Function.prototype.apply() allows you to call a function with a given this value and an array of arguments.
  var index = array.indexOf(min);
  return min + ',' + index
} console.log(minArrayElementAndIndex([4, 2, 2, -1, 6]));


/*Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2*/

function compare(a, b) {
  return a - b
}

function secondSmallestElement(array) {
  var ascendingArray = array.sort(compare());
  var secondSmallest = ascendingArray[1];
  return secondSmallest;
} console.log(secondSmallestElement([4, 2, 2, -1, 6]));

//

function secondSmallestElement(array) {
  var min1 = array[0];
  var min2 = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < min1) {
      min1 = array[i];
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j] < min2 && array[j] > min1) {
      min2 = array[j]
    }
  }
  return min2;

} console.log(secondSmallestElement([4, 2, 2, -1, 6]));

/*Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

function sumOfPositiveElements (array) {
  var result = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] > 0){
      result += array[i];
    }
  }
  return result;
}console.log(sumOfPositiveElements([3, 11, -5, -3, 2]));


/*Write a program that checks if a given array is symmetric. 
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

function isArraySymmetric(array) {
  var output;
  for (var i = 0; i < array.length; i++) {
    for (var j = array.length - 1; j >= 0; j--) {
      if (array[i] === array[j]) {
        output = 'The array is symmetric.'
      } else {
        output = 'The array is not symmetric.'
      }
    }
  }
  return output;
}
console.log(isArraySymmetric([2, 4, -2, 7, -2, 4, 2]));
console.log(isArraySymmetric([3, 4, 12, 8]));

/*Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function intertwineArrays(arr1, arr2) {
  var output = [];
  for (var i = 0; i < arr1.length; i++) { //only 1 for loop !!!
    output.push(arr1[i], arr2[i]);
  }
  return output;
}
console.log(intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));

/* Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenateArrays (arr1, arr2) {
  return arr1.concat(arr2);
}console.log(concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]));

//

function concatenateArrays(arr1, arr2) {
  var output = [];
  for (var i = 0; i < arr1.length; i++) {
    output[i] = arr1[i];
    for (var j = 0; j < arr2.length; j++) {
    output[arr1.length+j] = arr2[j];
    }
  }
  return output;
} console.log(concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]));


/* Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

function deleteArrayElement(array, element) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] != element) {
      output[i] = array[i]; 
    }
    // } else {
    //   output[i] = '';
    // }
  }
  return output;
} console.log(deleteArrayElement([4, 6, 2, 8, 2, 2], 2));

//

function deleteArrayElement(array, element) {
  var output = [];
  if (array.length < 1 || !element) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] != element) {
       output.push(array[i]); 
    }
  }
  return output;
} console.log(deleteArrayElement([4, 6, 2, 8, 2, 2], 2));

//
function deleteArrayElement(array, element) {
  var output = [];
  if (array.length < 1 || !element) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      delete array[i];
    } else {
      output.push(array[i]);
    }
  }
  return output;
} console.log(deleteArrayElement([4, 6, 2, 8, 2, 2], 2));

/*Write a program that inserts a given element e on the given position p in the array a. If the value of 
the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
 */

 function insertArrayElement (array, element, position) {
   var output = [];
  for (var i = 0; i < array.length; i++) {
    if (i == position) {
      array[i] = element;
      
    } else {
      array[i] = array[i];
    }
    output.push(array[i]) //radi za zamenu elementa na datoj poziciji [2, -2, 33, 78, 5, 8]
  }
  return output;
 }console.log(insertArrayElement([2, -2, 33, 12, 5, 8], 78, 3));

 //

function insertArrayElement(array, element, position) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (i == position) {
      output = array.splice(position, 0, element);
      output = array;
    } else if (position > array.length) {
      output = 'The position cannot be greater than the array length.';
    }
  }
  return output;
} console.log(insertArrayElement([2, -2, 33, 12, 5, 8], 78, 15));

// Andjelka
function insertElement(array, element, position) {
  position = position || 0;
  if (array.length < 1 || !element) {
    return array;
  }

  if (position => array.length) {
    console.log("Index out of bounds.");
    return array;
  }

  var newArray = [];
  for (var i = 0, j = 0; i < array.length; i++) {
    if (i === position) {
      newArray[j] = element;
      newArray[j + 1] = array[i];
      j += 2;
    } else {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
}

var element = 78;
var position = 3;
var array = [2, -2, 33, 12, 5, 8];
var output = insertElement(array, element, position);

console.log(output);