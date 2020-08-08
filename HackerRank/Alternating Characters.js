const alternatingCharacters = (s) => {
    var count = 0
    for (let x = 0;x < s.length;x++) {
        if (s[x] === s[x + 1]) {
            count++
        }
    }
    return count
}

module.exports = {
    alternatingCharacters
}