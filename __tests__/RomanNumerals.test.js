const RomanNumerals = require('../CodeWars/RomanNumerals');

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
        [2008, 'MMVIII']
    ]
    it.each(data)("given %d, expect %s", (input, result) => {
        expect(RomanNumerals.toRoman(input)).toBe(result);
    });
});

describe.skip("toRoman", () => {
    const data = [
        ['XXI', 21],
        ['I', 1],
        ['IV', 4],
        ['MMVIII', 2008],
        ['MDCLXVI', 1666]
    ]
    it.each(data)('given %s, expect: %d', (input, result) => {

        expect(RomanNumerals.toRoman(input)).toBe(result);
    })
})