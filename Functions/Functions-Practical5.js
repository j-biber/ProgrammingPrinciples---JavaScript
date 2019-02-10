/*Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/

function switchMinAndMaxElements (array) {
    
    var min = Math.min(...array);
    var minIndex = array.indexOf(min);
    var max = Math.max(...array);
    var maxIndex = array.indexOf(max);
    var output = [];

    for (var i = 0; i < array.length; i++) {
        array[minIndex] = max;
        array[maxIndex] = min;
        output.push(array[i]);
    }
    return output;
}
console.log(switchMinAndMaxElements([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/*Use the following array to make a new one by dividing its values by two and adding 5. 
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]*/

function changeArrayValues (array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
    var changedValue = array[i] / 2 + 5;
    if (array[i] <= 0) {
        changedValue = 20;
    }
    output.push(changedValue)
    }
    return output;
}console.log(changeArrayValues([ 3, 500, -10, 149, 53, 414, 1, 19 ]));

/*Initialize two arrays. The first one should contain student names, the second one the number of points 
for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.*/

function dispalyStudentsGrades(students, points) {
    var output = '';
    var grade;
    for (var i = 0; i < students.length; i++) {
        for (var j = 0; j < points.length; j++) {
            if (points[j] > 50 && points[j] <= 60) {
                grade = ' earned 6.';
            }
            else if (points[j] > 60 && points[j] <= 70) {
                grade = ' earned 7.';
            }
            else if (points[j] > 70 && points[j] <= 80) {
                grade = ' earned 8.';
            }
            else if (points[j] > 80 && points[j] <= 90) {
                grade = ' earned 9.';
            }
            else if (points[j] > 90 && points[j] <= 100) {
                grade = ' earned 10.';
            } 
            else  if (points[j] <= 50) {
                grade = ' failed to complete the exam.'
            } 
            if (i == j) {
                output += students[i] + ' acquired ' + points[j] + ' points and' + grade + '\n';
            }
        } 
    }
    return output;
}
console.log(dispalyStudentsGrades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));

/*Sort a previously defined array. Place its sorted values into a new array whose values are equivalent 
to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]*/

function sortArrayValues(array) {
    var changedValuesArray = [];
    var output = [];
    for (var i = 0; i < array.length; i++) {
        array[i] *= 2;
        changedValuesArray.push(array[i]);
        output = changedValuesArray.sort(function (a, b) { return a - b });
    }
    return output;
} console.log(sortArrayValues([13, 11, 15, 5, 6, 1, 8, 12]));


/* Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/

function sortArrayDescending (inputArray) {
   return  inputArray.sort(function (a, b){return b-a});
}console.log(sortArrayDescending([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


/* Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000*/ 

function calculate() {
    var sumEven = 0;
    var sumOdd = 0;
    var sum = 0;
    
    for (var i = 2; i <= 1000; i += 2){
        sumEven += i;
    }
    for (var j = 1; j <= 500; j += 2){
        sumOdd += j
    }
    sum = (sumEven - sumOdd) * 12.5;
    return sum; 

} console.log(calculate());

// 

var sumEven = 0;
var sumOdd = 0;
var sum = 0;

for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
        sumEven += i;
    }

}
for (var j = 1; j <= 500; j++) {
    if (j % 2 != 0) {
        sumOdd += j
    }

}
sum = (sumEven - sumOdd) * 12.5;
console.log(sum);


/*Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa*/

function arrayToString (inputArray) {
    var outputArray = [];
    var string;
    for (var i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] == 'string' && inputArray[i].length >= 2) {
           var element = inputArray[i][0] +  inputArray[i][1];
            outputArray.push(element);
            string = outputArray.join('');
        }
    }
    return string;
}console.log(arrayToString([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));


/*Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB*/

function reverseString (string) {
    // var arrayOfStrings = string.split('');
    // var output = arrayOfStrings.reverse().join('');
    return string.split('').reverse().join('');
}console.log(reverseString('Belgrade Institute of Technology'));

//

function reverseString (string) {
    var newString = '';
    for (var i = string.length - 1; i >= 0; i--) { 
        newString += string[i];
    }
    return newString
}console.log(reverseString('Belgrade Institute of Technology'));


/*Write a program that displays all the combinations of two numbers between 1 and 7. 
Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. 
(E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

function numberCombinations(number) {
    var output = '';
    for (var i = 1; i <= number; i++) {
        for (var j = 1; j <= number; j++) {
            if (i != j) {
                output += '(' + i + '.' + j + ')' + '; ';
            }
        }
    }
    return output;
} console.log(numberCombinations(7)); 

/*Write a program that checks if the entered number is a prime number 
(i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false*/

function isPrimeNumber(number) {
    if (number == 1) { //works only with == and ===
        return false;
    }
    else if (number == 2) { //works only with == and ===
        return true;
    } else {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            } 
        }
        return true; // return must be in ELSE, not for-if-else
    }
    
} console.log(isPrimeNumber(2));


/*Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true*/

function isPalindrome (string) {
    for (var i = 0; i < string.length; i++) {
        for (var j = string.length-1; j >=0; j--){
            if (string[i] === string[j]){
                return true;
            } else {
                return false;
            }
        }
    }
}console.log(isPalindrome('rAce Car'));

//

function isPalindrome(string) {
    //var regex = new RegExp(/\s/ig); -> var str = string.replace(regex,'');
    // \W removes all non-alphanumeric characters and si equivalent to [^A-Za-z0–9]

    var str = string.replace(/\s/ig, '').toLowerCase();
    var palindrome = str.split('').reverse().join('');
 
    if (palindrome === str) {
        return true;
    } else {
        return false;
    }

    // OR return str === palindrome; 

} console.log(isPalindrome('a nut for a jar of tuna'));

//

function isPalindrome(string) {
    var re = /[\W]/g; // /[\W_]/g
    var testString = string.toLowerCase().replace(re, '')
    var palindrome = testString.split('').reverse().join('');

    return testString === palindrome;
}
console.log(isPalindrome("A man, a plan, a canal. Panama"));


/*Write a program that calculates the greatest common divisor of two integers. 
Note: The greatest common divisor of two non-zero integers is the greatest positive number that 
divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6 | 9*/

function greatestCommonDivisor (num1, num2) {
    var output;
    for (var i = 1; i <= num1; i++) {
        for (var j = 1; j <= num2; j++) {
            if (num1 % i == 0 && num2 % i == 0) {
                output = i;
            }else if (num1 % j == 0 && num2 % j == 0) {
                output = j;
            }
        }
    }
return output;
} console.log(greatestCommonDivisor(81, 9));

//

function greatestCommonDivisor(num1, num2) {
    var divisor;
    for (var i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i;
        }
    }
    return divisor;
}
console.log(greatestCommonDivisor(81, 9));

// ???
var gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 458));

