const makeAnagram = (a,b) => {
    var purges = 0;
    if (isAnagrams(a,b)) {
        return purges
    }

    var mapA = mapString(a)
    var mapB = mapString(b)

    var ans = new Map();

    for (const [key, value] of mapA) {
        const val = mapB.get(key);
        if (val) {
        const lower = value < val ? value : val
            ans.set(key, lower)
            purges += lower
        }
    }

    console.log(ans);

    return (a.length - purges) + (b.length - purges)
}

function mapString(string) {
    var map = new Map()

    string.split('').forEach(val => {
        var incrementer = map.get(val);
        if (!incrementer) {
            incrementer = 1
            map.set(val, incrementer)
        } else {
            map.set(val, incrementer+1)
        }
    })
    return map
}

function isAnagrams(word, val) {

    if (word.length !== val.length) return false

    word = word.split('').sort();
    val = val.split('').sort();
    for (let x = 0;x < word.length;x++) {
        if (word[x] !== val[x]) {
            return false;
        }
    }
    return true
}

module.exports = {
    makeAnagram
}