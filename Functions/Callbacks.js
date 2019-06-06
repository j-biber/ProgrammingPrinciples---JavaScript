//1) [1, 2, 3] --> [1, 4, 9]

function squareArray(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i] * array[i];
    }

    return newArray;
}

var a = [1, 2, 3, 4, 5];
console.log(squareArray(a));

//2) [1, 2, 3] --> [2, 4, 6]

function doubleArray(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray[i] = 2 * array[i];
    }

    return newArray;
}

var a = [1, 2, 3, 4, 5];
console.log(doubleArray(a));

//3)
function transformArray(array, transformation) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray[i] = transformation(array[i]);
    }

    return newArray;
}

function square(n) {
    return n * n;
}

function double(n) {
    return 2 * n;
}

function addOne(n) {
    return n + 1;
}

var a = [1, 2, 3, 4, 5];
var result;

result = transformArray(a, square);
console.log(result);

result = transformArray(a, double);
console.log(result);

result = transformArray(a, addOne);
console.log(result);

result = transformArray([3, 4, 5], function (n) {
    return n + 1;
});
console.log(result);