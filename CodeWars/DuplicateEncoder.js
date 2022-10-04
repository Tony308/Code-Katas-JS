function duplicateEncode(word){
    // ...
    let map = new Map();
    
    let ans = word.split('').map(letter => {
        let currentChar = letter.toLowerCase();
        let counter = map.get(currentChar) || 0;
        map.set(currentChar, ++counter);
        return currentChar;
    });

    return ans.map(letter => {
        let counter = map.get(letter);
        if (counter == 1) {
            return '(';
        }
        return ')';
    }).join("");

}

module.exports = duplicateEncode;