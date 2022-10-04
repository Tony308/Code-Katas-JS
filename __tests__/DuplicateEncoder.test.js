const duplicateEncode = require("../CodeWars/DuplicateEncoder");

// describe("Duplicate Encoder", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(duplicateEncode("din"),"(((");
//   });
// });

describe("Duplicate Encoder", () => {
    it("", () => {
        const actual = duplicateEncode("din");
        const expected = "(((";
        expect(actual).toBe(expected);
    })
    it("", () => {
        const actual = duplicateEncode("recede");
        const expected = "()()()";
        expect(actual).toEqual(expected);

    });
    it("", () => {
        const actual = duplicateEncode("Success");
        const expected = ')())())';
        expect(actual).toEqual(expected);

    });
    it("", () => {
        const actual = duplicateEncode("(( @");
        const expected = "))((";
        expect(actual).toEqual(expected);

    });
    it("", () => {
        const actual = duplicateEncode("CodeWarrior");
        const expected = "()(((())())";
        expect(actual).toEqual(expected);

    })
})