/*Write a program that compares two numbers and display the larger. 
Result should be displayed in the console.*/

var a = 5;
var b = 7;

if (a > b) {
    console.log(a);
} else if (b > a){
    console.log(b);
}else {
    console.log('the numbers are equal')
}

/*Write a program to check if the number is divisible by 2. 
If it is, print even, if not, print odd. Sample numbers: 3, 4, 9 */

var input = 3;

if (input % 2 == 0) {
    console.log('even');
}else {
    console.log('odd')
}

/*Write a program to check if the number is divisible by 3 and 5. 
If it is, print that number. Sample numbers: 15, 12*/

var input = 15;

if (input % 3 == 0 && input % 5 == 0) {
    console.log(input);
}

/*Write a conditional statement to find the sign of product of three numbers.
Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 */

var a = 3; 
var b = -7;
var c = 2;

var product = a * b * c;

if (product>0) {
    console.log('+');
}else {
    console.log('-')
}

/*Write a program to check if the variable is a number. 
If it’s a number, check if it is divisible by 2. 
If it is, print the result, if not, show “X”
Sample numbers: 10, 7*/

var input = 7;

if (typeof input == 'number' && input % 2 == 0 ) {
    console.log(input/2)
} else {
    console.log('X')
}

/*Write a conditional statement to find the largest of five numbers. 
Display the result in console. Sample numbers: -5, -2, -6, 0, -1 */

var num1 = -5;
var num2 = -2;
var num3 = -6;
var num4 = 0;
var num5 = -1;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    console.log(num2);
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
    console.log(num3);
}else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
    console.log(num4);
}else {
 console.log(num5);
}

/*Write a conditional statement to sort three numbers. Sample numbers : 0, -1, 4 */

var num1 = 0;
var num2 = -1;
var num3 = 4;

if (num1 > num2 && num1 > num3){
    if (num2 > num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
    
}else if (num2 > num1 && num2 < num3){
    if (num1 > num3){
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
    
}else if (num3 > num1 && num3 > num2){
    if (num1 > num2){
        console.log (num3, num1, num2)
    } else {
        console.log (num3, num2, num1)
    }

}


