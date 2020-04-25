/**
 * Create a function that takes an array of numbers as an argument and return "I got 3!" 
 * if the number 3 appears in the array. Otherwise, return "there is no 3 in the array".
 */
gotThree = (array) => {
    let checkArray = array.includes(3);
    if (checkArray) {
        console.log("I got 3!");
    } else {
        console.log("there is no 3 in the array");
    }
}
gotThree([1, 2, 3, 4, 5, 6, 7])