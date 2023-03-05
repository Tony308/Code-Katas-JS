const rotateLeft = (d, arr) => {
    let ans = arr;
    for (let x = 0;x < d;x++) {
        let temp = arr[0];
        ans.shift();
        ans.push(temp);
    }
    return ans.join(" ");
}

module.exports = rotateLeft;