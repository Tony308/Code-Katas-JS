/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let arr = [0,1,1];
    for (let x = 3;x < 38;x++) {
        arr[x]= arr[x-3] + arr[x-2] + arr[x-1];
    }
    return arr[n];
};

module.exports = tribonacci