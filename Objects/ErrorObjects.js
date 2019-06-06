/* try {
   // ... try to execute the code ...
} catch (e) {
   // ... handle errors ...
} finally {
   // ... execute always ...
}
*/
/*throw new Error("OMG something went wrong");
throw {
   name: "MyError",
   message: "OMG! Something wrong happened"
}
*/


var x = 5;
var y = '4';
var result;

// if (y != 0) {
//     result = x/y;
// } else {
//     console.log('Division by 0!');
// }


try {
    if (typeof x != "number" || typeof y != "number") {
        var typeError = new TypeError ('X and Y are expected to be numbers.')
        throw typeError;
    }
    if (y == 0) {
        var divisionError = new Error ('Division by 0!');
        throw divisionError;
    }

    result = x / y;
    //return result;
    console.log(result);

} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError: ', error.message);
    } else {
        console.log('Error: ', error.message);
    }

} finally {
    console.log('We are done!');
}