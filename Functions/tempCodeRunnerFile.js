function isNumberOdd (element) {
if (element % 2 != 0) {
    return element;
}
}
function filterArrayElements (array) {
var output =  array.filter(isNumberOdd);
return output;
}console.log(filterArrayElements([2, 8, 11, 4, 9, 3]));