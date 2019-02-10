function arrayOfNumberDigits (number) {
    var digits = number.toString().split('').map(Number);
    return digits;
}console.log(arrayOfNumberDigits(1569));