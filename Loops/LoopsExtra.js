/*Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no*/

var element = 3;
var array = [5, -4.2, 18, 7];
var output;

if (array[i] == element){
    output = 'yes';
    break;
}else {
    output = 'no';
}

console.log(output);

/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var array = [-3, 11, 5, 3.4, -8];
var output = [];

for (var i = 0; i<array.length; i++){
    if (array[i]>0){
        output = array[i]*2;
    }
    else {
        output=array[i];
    }
  
console.log(output)
}

/*Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var array = [4, 2, 2, -1, 6];
var minimum = array[0];
var index;

for (var i = 0; i<array.length; i++){
    if (array[i]<minimum){
        minimum = array[i];
        index=i;
    }
}
console.log(minimum, index)

/*Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2*/

var array = [4, 2, 2, -1, 6];
var min1 = array[0];
var min2 = array[0];

for (var i =0; i<array.length; i++){
    if (array[i]<min1){
        min1 = array[i];
    }
}
for (var j=0; j<array.length; j++){
    if (array[j] < min2 && array[j] > min1){
        min2 = array[j]
    }
}
console.log(min2);

// Aleksandra

var a = [4, 2, 2, -1, 6];
var i;
var min = a[0];
var min2 = a[0];

for(i = 1; i < a.length; i++){
     if(min > a[i]){
         min = a[i];
     }
     console.log(min);
 }

 for(i = 0; i < a.length; i++){
     if(min2 > a[i] && min < a[i]){
         min2 = a[i];
     }
 }

console.log(min2);

/*Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

var array = [3, 11, -5, -3, 2];
var sum=0;

for (var i=0; i<array.length; i++){
    if (array[i]>0){
        sum += array[i]
    }
}
console.log(sum);

/*Write a program that checks if a given array is symmetric. An array is symmetric if it 
can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

var array = [2, 4, -2, 7, -2, 4, 2];
//var array = [3, 4, 12, 8];
var output;

for (var i = 0; i < array.length; i++){
    for (var j = array.length-1; j >=0; j--){
        if (array[i] === array[j]){
            output = 'The array is symmetric';
        }else{
            output = 'The array is not symmetric';
        }
    }
}
console.log(output);

/*Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
var output=[];

for (var i = 0; i < arr1.length; i++){
    //ne treba druga petlja! for (var j = 0; j< arr2.length; j++){
        output += arr1[i] + ',' + arr2[i] + ',';
        //ili za pravi niz - output.push(arr1[i], arr2[i]);
    }
//}
console.log(output);

//

var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
var output=[];

for (var i = 0; i < arr1.length; i++){
        output.push(arr1[i], arr2[i]);
    
}
console.log(output);

/*Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];

var output = arr1.concat(arr2);
console.log(output);


/*Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]*/

var element = 2;
var array =  [4, 6, 2, 8, 2, 2];
var output=[];

for (var i = 0; i<array.length; i++){
    if (array[i] == element){
    output = delete array[i];
  } else {
        output = array[i];
    }
    console.log(output);
}

//

var element = 2;
var array =  [4, 6, 2, 8, 2, 2];
var output='';

for (var i = 0; i<array.length; i++){
    if (array[i] !== element){
    output = array[i];
  } else {
        output = '';
    }
    console.log(output);
}

/*Write a program that inserts a given element e on the given position p in the array a. 
If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var array = [2, -2, 33, 12, 5, 8];

var element = 78;
var index = 3;
var output;

for (var i=0; i<array.length; i++){
if (i == index){
   output = array.splice(index, 0, element);
   output = array;
} else if (index>array.length) {
    output = 'The index cannot be greater than the array length.';
}

}
console.log(output);








