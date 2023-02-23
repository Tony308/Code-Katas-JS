function processData(input) {
    //Enter your code here
    let even = [];
    let odd = []

    let inputs = input.split("\n");
    
    let ans = [];
    for (let x = 0; x < inputs.length - 1; x++) {
        const word = inputs[x + 1];
        word.split("").forEach((val, index, arr) => {
            if (index == 0 || index % 2 == 0) {
                even.push(val);
            } else {
                odd.push(val);
            }
        });
        even = even.join('');
        odd = odd.join("")
        ans.push(`${even} ${odd}`);
        even = [];
        odd = []
    }
    console.log(ans);
    return ans.join("\n");
}

module.exports = processData;