const matchingStrings = (stringList, queries) => {
    let ans = [];
    queries.forEach(val => {
        let counter = 0;
        stringList.forEach((item) => {
            item == val ? counter++ : null;
        });
        ans.push(counter);
    });
    return ans;
}

module.exports = matchingStrings;