const RomanNumerals = require('../../CodeWars/RomanNumerals');

describe("toRoman", () => {
    const data = [
        [1000, "M"],
        [4, 'IV'],
        [1, 'I'],
        [6, 'VI'],
        [80, 'LXXX'],
        [88, "LXXXVIII"],
        [90, "XC"],
        [99, "XCIX"],
        [1900, 'MCM'],
        [1990, 'MCMXC'],
        [2008, 'MMVIII'],
        [3009, "MMMIX"],
        [9009, 'MMMMMMMMMIX'],
        [2884, 'MMDCCCLXXXIV'],
        [4444, 'MMMMCDXLIV'],
        [1437, 'MCDXXXVII']
    ]
    it.each(data)("given: %d, expect: %s", (input, result) => {
        expect(RomanNumerals.toRoman(input)).toBe(result);
    });
});

describe("fromRoman", () => {
    const data = [
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
        ['XXI', 21],
        ['MMVIII', 2008],
        ['MDCLXVI', 1666],
        ['MDXCIII', 1593],
    ]
    it.each(data)('given %s, expect: %d', (input, result) => {
        expect(RomanNumerals.fromRoman(input)).toBe(result);
    })
})