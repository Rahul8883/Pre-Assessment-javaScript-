/**
 * the code so that it correctly checks if two arrays are equal
 */
var arr1 = [1, 2];
var arr2 = [1, 3];
if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log('True');
} else {
    console.log('False');

}
/**
 * Test case below here : -
 * 
isEquals([1, 2], [1, 3]) ➞ false
isEquals([1, 2], [1, 2]) ➞ true
isEquals([4, 5, 6], [4, 5, 6]) ➞ true
isEquals([4, 7, 6], [4, 5, 6]) ➞ false

 */