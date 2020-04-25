/**
 * Create a function that takes two arguments (num, length) and returns an array of multiples of num up to length.
 * 
 * @param {number} a 
 * @param {length} b 
 */
function multiple(a, b) {
    let i;
    let arr = [];
    for (i = 1; i <= b; i++) {
        let arr1 = a * i
        arr.push(arr1)
    }
    console.log(arr);
}
multiple(7, 5)