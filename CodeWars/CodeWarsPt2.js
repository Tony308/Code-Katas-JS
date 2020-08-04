function replicate(times, number) {
    if ( times < 1) {
        return [];
    }
    if (times > 0) {
        return [number, ...replicate(--times, number)];
    }
}

const factorial = n => {
    return n === 0 ? 1 : n * factorial(n-1);
};

const fibonacci = n => {
    if (n === 1 || n === 2) {
        return 1;
    } 
    return fibonacci(n-1) + fibonacci(n-2);
};

function chirp(n) {
    return n > 0 ? "chirp-" + chirp(n-1) : "chirp";
}

function capitalizeWord(word) {
    word[0] = word[0].toUpperCase()
    return word[0].toUpperCase() + word.substring(1)
}

function alphabetPosition(text) {
    var alphabet = new Map();

    "abcdefghijklmnopqrstuvwxyz".split('').forEach((val,x) => alphabet.set(val,x+1))

    return text.toLowerCase().split('').filter(val => alphabet.get(val))
    .map(val => alphabet.get(val))
    .join(` `)
}

function domainName(url){
    var regex = /([\.\/]?[\w-]+\.{1})/g
    url = url.replace(`http://`, ``).replace(`https://`, ``).replace(`www.`, ``).replace(`/`, '')
    if (url === "") return ''
    return url = url.match(regex)[0].split('').filter(val => val.match(/[\w-]+/g)).join('')
}

function pigIt(str){
    return str.split(" ").map(val => {
        if (val.match(/[?!]+/g)) return val
        return val.concat(val[0], 'ay').slice(1)
    }).join(' ')
}

function validSolution(board){
    var length = board.length
    var validateRows = new Set()
    var validateCols = new Set()


    for (let x = 0;x < length;x++) {
        for (let y = 0;y < length;y++) {
            validateRows.add(board[x][y])
            validateCols.add(board[y][x])
        }
        if (validateRows.size !== 9 || validateCols.size !== 9) {
            console.log(validateCols);
            console.log(validateRows);
            return false
        }
        validateRows.clear()
        validateCols.clear()
    }

    let grid = 0
    while (grid < length) {
        for (let x = grid;x < grid+3;x++) {
            for (let y = grid;y < grid+3;y++ ) {
                validateCols.add(board[x][y])
            }
        }
        if (validateCols.size !== 9) {
            console.log(validateCols);
            console.log(validateRows);
            return false
        }
        validateCols.clear()
        grid += 3
    }

    return true ;
}

function firstNonRepeatingLetter(s) {
    var letters = new Map();

    s.split('').forEach(val => {
        let incrementer = letters.get(val);
        if (!incrementer) {
            incrementer = 1
            letters.set(val, incrementer)
        } else {
            letters.set(val, incrementer+1)
        }
    })

    var keys = letters.keys()
    var values = letters.values();

    for (let x = 0;x < letters.size;x++) {
        const key = keys.next().value
        var value = 0;
        
        const upperCaseVal = letters.get(key.toUpperCase())
        const lowerCaseVal = letters.get(key.toLowerCase());

        if (!key.match(/[a-zA-Z]/g)) {
            value = letters.get(key)
        } else {
            if (upperCaseVal) {
                value += upperCaseVal
            }
            if (lowerCaseVal) {
                value += lowerCaseVal
            }
        }
        
        if (value === 1 ) {
            return key
        }
    }
    return ''
}

module.exports = {
    replicate,
    capitalizeWord,
    alphabetPosition,
    domainName,
    pigIt,
    validSolution,
    firstNonRepeatingLetter
}