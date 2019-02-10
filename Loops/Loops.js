/*Write a program that will iterate from 0 to 10 and display squares of numbers.*/

for (var x = 0; x<=10 ; x++){
    console.log(x*x);
}

var newArray = [];
for (var x = 0; x<=10 ; x++){
    newArray += x*x + " ";
}
console.log(newArray);

/*Write a for loop that will iterate from 0 to 15. For each iteration, it will check 
if the current number is odd or even, and display a message to the screen.*/

for (var x = 0; x <=15 ; x++){
    if (x % 2 == 0){
        console.log(x + 'is even.')
    }else {
        console.log(x + 'is odd.')
    }
}

/*Write a program to sum the multiples of 3 and 5 under 1000.*/

var sum=0;

for (var x = 0; x<=1000; x++){
if (x % 3 == 0 && x % 5 == 0){
    sum+=x;
}
}
console.log(sum);

/*Write a program to compute the sum and product of an array of integers.*/

var array = [1, 2, 8, 6, 7, 15, 9];

var sum = 0;
var product =1;

for (var i = 0; i<array.length; i++){
    sum+=array[i];
    product*=array[i];
}
console.log('Sum:'+ sum, 'Product:' + product);

/*Write a program which prints the elements of the following array as a single string.*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var string= '';

for (var i=0; i<x.length; i++){
    string+=x[i]
}
console.log(string);

/*Write a program that prints the elements of the following array.*/

var array = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]];

for (var i = 0; i<array.length; i++){
console.log(i +':');
for (var j = 0; j<array[i].length; j++){
    console.log(" " + array[i][j]);
} 
}


for (var i in array) {
    console.log("row " + i);
    for (var j in array[i]) {
        console.log(" " + array[i][j]);
    }
}

/*Write a program that outputs the sum of squares of the first 20 numbers.*/

var sum=0;

for (var x = 0; x<=20; x++){
    sum+=x*x;
}
console.log(sum);

var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var sum=0;

for (var i = 0; i<array.length; i++){
    sum+= array[i]*array[i];
}
console.log(sum);

/*Write a program that computes average marks of the following students. 
Then use this average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68

The grades are computed as follows :
< 60% F
< 70% D
< 80% C
< 90% B
< 100% A*/

var students = ['David', 'Marko', 'Dany', 'John', 'Thomas'];
var points = [80, 77, 88, 95, 68];
var grade;

for (var i=0; i<points.length;i++){
    for (var j=0; j<students.length;j++){
        if (points[i]<60){
            grade = 'F';
        }
        if (points[i]>60 && points[i]<=70){
            grade = 'D';
        }
        if (points[i]>70 && points[i]<=80){
            grade = 'C';
        }
        if (points[i]>80 && points[i]<=90){
            grade = 'B';
        }
        if (points[i]>90 && points[i]<=100){
            grade = 'A';
        }
        
    }
    console.log(students[i]+ ' achieved ' + grade);
} 

//

var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];

var sumOfMarks = 0;

for (var i = 0; i < students.length; i++) {
    sumOfMarks += students[i][1];
}

var avg = sumOfMarks / students.length;

console.info("Average grade: " + avg);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

// 


var students = ['David', 'Marko', 'Dany', 'John', 'Thomas'];
var points = [80, 77, 88, 95, 68];

var sumOfPoints = 0;

for (var i = 0; i < points.length; i++) {
    sumOfPoints += points[i];
}

var avg = sumOfPoints / students.length;

console.info("Average points: " + avg);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}


/*Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
When you have that working, modify your program to print "FizzBuzz", for numbers that are 
divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by 
only one of those).*/

for (var i =1; i <=100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0){
      console.log('Fizz');
    }
    else if (i % 5 == 0){
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}









