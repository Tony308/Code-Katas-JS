function dynamicArray(n, queries) {
    // Write your code here
    let ans = [];
    let lastAnswer = 0;
    let arr = [];
    for (let x = 0; x < n; x++) {
        arr.push([]);
    }
    queries.forEach((innerArr, index, a) => {
        const [first, x, y] = innerArr;
        const idx = ((x ^ lastAnswer) % n);
        console.log(arr);
        console.log(lastAnswer);
        if (first == 1) {
            const inner = arr[idx];
            inner.push(y);
        } else if (first == 2) {
            lastAnswer = arr[idx][y % arr[idx].length];
            ans.push(Number(lastAnswer));
        }
        console.log(ans);
    });
    return ans;
}

module.exports = dynamicArray;