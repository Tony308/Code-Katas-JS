const countBlackCells = require("../../CodeWars/CountBlackCells");

describe("", () => {
    it.each([
        [2,2,4],
        [3,4,6],
        [3,3,7],
        [2,5,6],
        [1,1,1],
        [1,2,2],
        [1,239,239],
        // [31,45, 75],
        // [33,44,86],
        // [16,8,30],
        // [6666,8888, 17774]
    ])("Given (%d, %d) then expect: %d", (n,m,expected) => {
        expect(countBlackCells(n,m)).toBe(expected);
    })
})