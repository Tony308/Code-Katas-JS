function duplicateCount(text) {
    text = text.toLowerCase();
    var letters = text.split(''); 
    var distinct = new Set();
    var removed = new Set();
    
    var counter = 0;

    letters.map((val, x) => {
        const countedAlready = !removed.has(val);
        const isUnique = distinct.has(val);
        if (isUnique && countedAlready){
            counter++;
            removed.add(val);
        } else {
            distinct.add(val);
        }
        
    })
    return counter;
}

function quadratic(x1, x2){
    var a = 1;
    var b = 0;
    var c = 0;

    console.log(x1,x2);
    b = (x1*-1) + (x2*-1);
    c = (x1 * x2);

    const ans = [a,b,c];
    return ans;
}

function findOdd(A) {

    var arr = A.sort();
    var counter = 0;

    var count = new Map();

    for (let x = 0;x < arr.length;x++) {
        if (arr[x] === arr[x-1]) {
            count.set(arr[x], ++counter);
        } else {
            counter = 0;
            count.set(arr[x], ++counter);
        }
    }

    const keys = count.keys();

    var ans = -1;
    for (let val of keys) {
        const isOdd = count.get(val) % 2 !== 0;
        if (isOdd) {
            ans = val;
        }
    }
    return ans;
}


function solution(a, b){
    // your code here
    var short;
    var long;

    if (a.length > b.length) {
        long = a
        short = b;
    } else {
        short = a;
        long = b;
    }

    var ans = short+long+short;
    return ans;
}
  
function isIsogram(str) {
    var word = str.toLowerCase().split('');
    var distinct = new Set();

    for (let x = 0;x < word.length;x++) {
        const letter = word[x];
        const added = distinct.has(letter);
        if (added) { 
            return false;
        } else {
            distinct.add(letter);
        }
    }
    return true;
}

function getCount(str) {
    var vowelsCount = 0;
    var vowels = 'aeuio'.split('');
    str = str.split('');
    str.forEach(val => {
        if (vowels.includes(val)) {
            vowelsCount++;
        }
    })
    return vowelsCount;
}

String.prototype.toJadenCase = function() {
    var str = this.valueOf().split(' ');
    str = str.map(val => {
        return val[0].toUpperCase().concat(val.substring(1));
    }).join(" ");
    return str;
};

function areOpposites(adverse, other) {
    const opposite = new Map();
    opposite.set("WEST", "EAST");
    opposite.set("EAST", "WEST");
    opposite.set("NORTH", "SOUTH");
    opposite.set("SOUTH", "NORTH");
    
    const first = opposite.get(adverse);

    if (first === other) {
        return true;
    }
    return false;
}

function dirReduc(arr){

    let counter = 0;

    while(counter < arr.length) {
        if (arr.length < 2) {
            return arr;
        }
        if (areOpposites(arr[counter], arr[counter+1])){
            arr.splice(counter, 2);
            counter--;
        } else {
            counter++;
        }
    }
    return arr;
}

function weatherInfo(temp) {
    var celsius = convertToCelsius(temp)
    if (celsius > 0)
        return (celsius + " is above freezing temperature")
    else
        return (celsius + " is freezing temperature")
  }
  
function convertToCelsius (fahrenheit) {
    var celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}

function nbYear(p0, percent, aug, p) {
    let counter = 0;
    while (p0 < p) {
        counter++;
        p0 = Math.floor(p0 * (1 + percent / 100) + aug);
    }
    return counter;
}

function rot13(message){
    message = message.split('').map((val) => {
        if (val.match(/\W|[0-9]/i)) {
            return val;
        }

        let letterCode = val.charCodeAt();
    
        if (letterCode <= 122 && 97 <= letterCode && letterCode + 13 > 122) {
            console.log("lower");
            letterCode -= 13;
        }
        else if (65 <= letterCode && letterCode <= 90 && letterCode + 13 > 90) {
            console.log("uppers");
            letterCode -= 13;
        } else {
            console.log('else');
            letterCode = letterCode + 13;
        }
        return String.fromCharCode(letterCode);
    }).join('');
    return message;
}

function comp(a1, a2){
    var ans = true;
    if (!Array.isArray(a1)|| !Array.isArray(a2)){
        return false;
    }
    a1.sort((a,b) => a > b ? 1: -1);
    a2.sort((a,b) => a > b ? 1: -1);

    for (let x = 0;x < a1.length;x++) {
        if (a1[x] * a1[x] !== a2[x]) {
            console.log(a1[x] * a1[x], a2[x]);
            return false;
        }
    }
    return true;
}

function deleteNth(arr, n){
    var count = new Map();
    
    return arr.filter((val, x) => {

        let incremeter = count.get(val);
        if (!incremeter) {
            incremeter = 1;
            count.set(val, incremeter);
        } else if (incremeter >= n) {
            return;
        } else {
            count.set(val, incremeter+1);
        }
        return val;
    })
}

function digPow(n, p){

    var arr = String(n).split('');
    
    var total = arr.reduce((sum, val) => {
        const squared = Math.pow(val, p++);
        return sum + squared;
    }, 0);

    var k = total / n
    const isInteger = Number.isInteger(k);
    const equivalent = n * k;
    
    console.log(`K: ${k}, Total: ${total}, isInteger: ${isInteger}, Equivalent: ${equivalent}`);
    console.log(`isInteger: ${isInteger}, ${equivalent == total}`);

    if (isInteger && equivalent == total) {
        return k;
    } else {
        return -1;
    }
}

function anagrams(word, words) {
    return words.filter(val => {
        if (val.length !== word.length) {
            return false;
        }
        return isAnagrams(word, val);
    })
}

function isAnagrams(word, val) {
    word = word.split('').sort();
    val = val.split('').sort();
    var ans = true;
    for (let x = 0;x < word.length;x++) {
        if (word[x] !== val[x]) {
            return false;
        }
    }
    return ans;
}

module.exports = {
    duplicateCount,
    quadratic,
    findOdd,
    solution,
    isIsogram,
    getCount,
    dirReduc,
    weatherInfo,
    nbYear,
    rot13,
    comp,
    deleteNth,
    digPow,
    anagrams
}