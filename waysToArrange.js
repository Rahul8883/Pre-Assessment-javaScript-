/**
 * Create a function that takes a variable number of arguments as groups of items,
 *  and returns the number of ways the items can be arranged, 
 * with one item from each group. Order does not matter.
 */
function waysToArrange() {
    console.log(arguments);
    var res = 1;

    for (var i = 0; i < arguments.length; i++) {
        res *= arguments[i];
    }
    return res;
}
console.log(waysToArrange(1, 2, 3, 4, 5)); //    output : 120

/**
 * This is another Approach.
 */

// function add() {
//     let args = Array.from(arguments);
//     return args.reduce(function(acc, cur) {
//         return acc * cur
//     })
// }
// console.log(add(2, 3, 4, 5));