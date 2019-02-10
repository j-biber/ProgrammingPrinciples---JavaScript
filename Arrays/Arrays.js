/*Write an arrays of days in a week. Using console.log display Sunday from the array.*/

var daysInAWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
console.log(daysInAWeek[6]);

/*Print all negative elements from the array [2, -4, 5, -2, -11].*/

var array = [2, -4, 5, -2, -11];
var i;
var newArray = [];

for (i=0; i<array.length; i++) {
    if (array[i]<0) {
    newArray += array[i];
    }
    console.log(newArray);
}

/*Print all elements with indices divisible by 3 from the array 
[5, 15, -5, 20, 12, 18, 72, 14, 9]. */

var array = [5, 15, -5, 20, 12, 18, 72, 14, 9];
var newArray = [];

for (var i = 0; i < array.length; i++) {
    if (i % 3 === 0){
        newArray += array[i] + ' ';
    }
    console.log(newArray);
}

var array = [5, 15, -5, 20, 12, 18, 72, 14, 9]; 
newArray = [];

for (var i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
        newArray.push(array[i])
    }
}
console.log(newArray);

/*What is the index of 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]
Using console.log:
Display the 3rd element of the array,
Display the 2nd element of the 3rd element.*/

var array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(array[0][3]);
console.log(array[2]);
console.log(array[2][1]);


