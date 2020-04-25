/**
 * Create a function that takes an integer n, 
 * reverses the binary representation of that integer,
 *  and returns the new integer from the reversed binary.
 */
rotateBinary = (number) => {
    var res = 0;
    while (number > 0) {
        res = res << 1;
        res = res | (number & 1);
        number = number >> 1;
    }
    return res;
}
var x = 45; //Input : 10, 12, 25, 45
console.log(rotateBinary(x)); //Output : 5, 3, 19, 45