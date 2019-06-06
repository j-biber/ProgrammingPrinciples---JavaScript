/*Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/

'use strict';
function duplicateArrayElements (array) {
var output = [];
array.forEach(element => {
    output.push(element, element)
});
return output;
}console.log(duplicateArrayElements([2, 4, 7, 11, -2, 1]));

/*Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

'use strict';
function removeArrayDuplicates(array) {
    var output = [];
    var array = array.sort()
    array.forEach((element, index, array) => {
        var nextElement = array[index + 1];
        if (element !== nextElement) {
            output.push(element)
        }
    })
    return output.sort((a, b) => {
        return a - b
    })
} console.log(removeArrayDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))


/*a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
b. Write a function that counts the number of elements less than the middle element. 
If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

function isOddNumOfElements(inputArray) {
    return !!(inputArray.length % 2);

} console.log(isOddNumOfElements([1, 2, 9, 2, 1]))

//
function countNumberOfElements(inputArray) {
    if (inputArray.length % 2 === 0) {
        return 'ERROR'
    }

    var middleElementIndex = (inputArray.length - 1) / 2;
    var cutArray = inputArray.slice(0, middleElementIndex);

    return cutArray.length + 1;

} console.log(countNumberOfElements([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

//

function numOfElementsLessThanMiddle(inputArray) {
    if (inputArray.length % 2 === 0) {
        return "ERROR";
    }

    var counter = 0;

    var middleElementIndex = (inputArray.length - 1) / 2;
    var middleElement = inputArray[middleElementIndex];

    inputArray.forEach(function (element) {
        if (element < middleElement) {
            counter++;
        }
    });

    return counter;
}console.log(numOfElementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/*Write a function that finds the smallest element of a given array. 
The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }*/

function smallestArrayElement (array) {
var min = Math.min(...array);
var index = array.lastIndexOf(min);
return {
    minValue: -2, 
    minLastIndex: 6 
}
}console.log(smallestArrayElement([1, 4, -2, 11, 8, 1, -2, 3]));

/*a. Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]
b. Write a function that finds all the elements in a given array that start with the “pro” substring. 
The function should be case insensitive. 
	Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]

c. ??? Write a function that expects an array and a callback function that filters out some of the elements. 
Use functions defined in a) or b) to test it.*/

function filterElements(array, element) {
    return array.filter(e => e < element)
} console.log(filterElements([2, 3, 8, -2, 11, 4], 6));

//
function filterElements(array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().includes('pro') ) {
            result.push(array[i]);
        }
    }
    return result;
} console.log(filterElements(["problem", "JavaScript", "Programming", "fun", "product"]));


/*Write a list (array) of products you usually buy in the supermarket. Write a price and name for each 
product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
Write a function that calculates the total price of your shopping list. 
Write a function that calculates the average product price of your shopping list. 
Print this value with the precision of three decimals. 
Write a function that prints out the name of the most expensive product on your shopping list. 
Write the name in uppercase.*/


function totalProductPrice (products) {
var totalPrice = 0;

for (var i = 0 ; i < products.length; i++){
    totalPrice += products[i].price;
}
return totalPrice;

}console.log(totalProductPrice([
    {name: 'apples', price: 100}, 
    {name: 'milk', price: 80}, 
    {name: 'bananas', price: 150}
    ]));


function averageProductPrice(products) {
    var averagePrice = 0;

    for (var i = 0; i < products.length; i++) {
        var totalPrice =0;
        totalPrice += products[i].price;
        averagePrice = totalPrice / products.length;
    }
    return averagePrice.toFixed(3);

} console.log(averageProductPrice([
    { name: 'apples', price: 99 },
    { name: 'milk', price: 83 },
    { name: 'bananas', price: 147 }
]));

function mostExpensiveProductPrice (products) {
 
for (var i = 0; i < products.length; i++) {
    var prices = [];
    prices.push(products[i].price);
    var mostExpensive = Math.max(...prices);
}
return mostExpensive;
}console.log(mostExpensiveProductPrice([
    { name: 'apples', price: 99 },
    { name: 'milk', price: 83 },
    { name: 'bananas', price: 147 }
]));

function mostExpensiveProduct(products) {
    var mostExpensive = products[0];
 
    for (var i = 0; i < products.length; i++) {
        if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
        }
    }
 
    return mostExpensive.name.toUpperCase();
 }console.log(mostExpensiveProduct([
    { name: 'apples', price: 99 },
    { name: 'milk', price: 83 },
    { name: 'bananas', price: 147 }
]));
 

/*Write a function that checks if a given string is written in all capitals.
Write a function that checks if a given string contains any digits.
Write a function that checks if a given string is a valid hexadecimal color.
Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
Write a function named validator that returns an object with properties stringValidator, 
passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).*/

function isStringInCapitals (string) {
return string === string.toUpperCase();
}console.log(isStringInCapitals('ISCAPItalS'));

//
function stringCointainsDigits (string) {
var regex = /[0-9]/;
if (string.match(regex)){
    return true;
}else {
    return false;
}
}console.log(stringCointainsDigits('anyd1g1ts'));

//
function isHex(string) {

    if (string.indexOf("#") === 0) {
        string = string.slice(1);
    }

    if (string.length !== 6 && string.length !== 3) {
        return false;
    }

    for (var i = 0; i < string.length; i++) {
        var hexDigit = string.charAt(i);
        var decimalHexDigit = parseInt(hexDigit, 16);

        if (isNaN(decimalHexDigit)) {
            return false;
        }
    }

    return true;
}

var input = "#f9f9f9";
var output = isHex(input);

console.log(output);

//
function isInInterval(num) {
   if (num >= 1900 && num <= 2018) {
       return true
   } else {
       return false
   }
}console.log(isInInterval(1800));

//

function Validator() {
    this.stringValidator = function (string) {
        var testString = string.toUpperCase();
        return string == testString;
    };
    this.passwordValidator = function (string) {
        var arrayOfChars = string.split("");
        arrayOfChars.sort();
        return !!(parseInt(arrayOfChars[0]) || parseInt(arrayOfChars[0]) === 0);
    };
    this.colorValidator = function (color) {
        var test = parseInt(color, 16);
        return (test.toString(16) === color && color.length === 6);
    };
    this.yearValidator = function (num) {
        return (num >= 1990 && num <= 2018) ? true : false;
    };
}

var validator = new Validator();
var result = validator.stringValidator("IVAN");
console.log(result);


/*Write a function that calculates a number of days to your birthday.*/
function daysToBirthday(birthday) {
    var birthdayObj = new Date(birthday);
    var currentDateObj = new Date();
    var dayOfBirthday = birthdayObj.getDate() + birthdayObj.getMonth() * 30.43;
    console.log(dayOfBirthday);

    var currentDay = currentDateObj.getDate() + currentDateObj.getMonth() * 30.43;
    console.log(currentDay);

    if (dayOfBirthday - currentDay > 0) {
        return dayOfBirthday - currentDay;
    } else {
        return Math.round(365.25 - Math.abs(dayOfBirthday - currentDay));
    }
}

console.log(daysToBirthday("8 February"));

/* 
Write a function that for a given departure and arrival time calculates the time the trip takes.
	Input: 8:22:13 11:43:22
    Output: 3 hours 21 minutes 9 seconds*/
    
    function durationOfFlight(start, end) {
        var startDate = "Oct 26 2018 " + start;
        var endDate = "Oct 26 2018 " + end;
        var departureHours = new Date(startDate).getHours();
        var arrivalHours = new Date(endDate).getHours();
        var departureMinutes = new Date(startDate).getMinutes();
        var arrivalMinutes = new Date(endDate).getMinutes();
        var departureSeconds = new Date(startDate).getSeconds();
        var arrivalSeconds = new Date(endDate).getSeconds();
        var hours;
        var minutes;
        var seconds;
        if (arrivalHours - departureHours > 0) {
            hours = arrivalHours - departureHours;
        } else {
            hours = 24 - Math.abs(arrivalHours - departureHours);
        }
        if (arrivalMinutes - departureMinutes > 0) {
            minutes = arrivalMinutes - departureMinutes;
        } else {
            minutes = 60 - Math.abs(arrivalMinutes - departureMinutes);
        }
        if (arrivalSeconds - departureSeconds > 0) {
            seconds = arrivalSeconds - departureSeconds;
        } else {
            seconds = 24 - Math.abs(arrivalSeconds - departureSeconds);
        }
        return hours + " hour(s) " + minutes + " minute(s) " + seconds + " second(s)";
    }
    
    console.log(durationOfFlight("8:22:13", "11:43:22"));


/*Write a constructor function that creates points in space. Each point in space has its own x, y, and z 
coordinate. For example, (3, 5, 1) can be a point in space.
Write a function that calculates the distance between two points in the space.*/

function PoinsInSpace (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
} //console.log(new PoinsInSpace(3, 5, 1));

var point1 = new PoinsInSpace(3, 5, 1);
var point2 = new PoinsInSpace(8, 4, 2);

function distanceBetweenPointsInSpace (point1, point2) {
    var x1 = point1.x;
    var x2 = point2.x;
    var y1 = point1.y;
    var y2 = point2.y;
    var z1 = point1.z;
    var z2 = point2.z;
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));
}console.log(distanceBetweenPointsInSpace(point1, point2));

/*Write a function that generates a random integer value between 5 and 20.
Write a function that generates a random integer value between 50 and 100. 
Write a function which expects a number and a callback generator function and returns an array of 
numbers produced by the generator function.*/

function randomValueInRange(x, y){
    var randomValue = Math.random() * (y - x) + x;
    return parseInt(randomValue);
}console.log(randomValueInRange(0, 100));

function randomValueGenerator(){
    var randomValue = Math.random() * (20 - 5) + 5;
    return parseInt(randomValue);
} //console.log(randomValueGenerator());
  function arrayOfRandomNumbers(num, generator) {
    var output = [];
    for (var i = 0; i < num; i++) {
        var randomNumber = generator();
         output.push(randomNumber);
    }
    return output;
  }
  
  console.log(arrayOfRandomNumbers(10, randomValueGenerator));


/* Write a function that shuffles the elements of a given array. 
		Input: [3, 6, 11, 2, 9, 1]
        Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)*/

'use strict';

function shuffle(array) {
    /*
        The idea is to pick a random index from 0 to array.length-1, read the element at that position and add it to
        the resulting array. We should avoid random index repetition, therefore we need to store the information
        about the used ones.
    */

    /* resulting array */
    var shuffledArray = [];

    /* used indexes */
    var usedIndexes = [];
    var randomIndex;

    /*
        We should read all the elements from the given array and move them to the resulting array.
        We can count the number of successful movings. The job is done as soon as we
        move all the elements.
    */
    for (var counter = 0; counter < array.length;) {

        /* we generate a random index from 0 to array.length-1 */
        randomIndex = Math.floor(Math.random() * array.length);

        /* we check if the generated random index is used */
        if (usedIndexes.indexOf(randomIndex) == -1) {

            /* if not, we add the element from that position to the resulting array */
            shuffledArray.push(array[randomIndex]);

            /* we add the randomIndex to the array of used indexes */
            usedIndexes.push(randomIndex);

            /* we can count this iteration as successful */
            counter++;
        }

        /* if the generated random index repeats, we proceed to the next iteration */
    }

    return shuffledArray;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));
        
