function processData(input) {
    //Enter your code here
    let ans = [];
    let map = new Map();
    let n = 0, contacts = [], lookups = [];
    n = parseInt(input[0]);
    this.input = input.split('\n');
    contacts = this.input.slice(1, n+1);
    lookups = this.input.slice(n+1);

    contacts.forEach((val) => {
        const [name, number] = val.split(" ");
        map.set(name, number);
    });

    lookups.forEach((val) => {
        if (map.has(val)) {
            const num = map.get(val);
            ans.push(`${val}=${num}`);
        } else {
            ans.push("Not found");
        }
    })
    // console.log(ans.join("\n"));
    return ans.join("\n");
} 


module.exports = processData;