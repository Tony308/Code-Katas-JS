const main = require("../../HackerRank/MatchStrings");

describe("test case: ", () => {
    it("1", () => {
        expect(main(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])).toStrictEqual([2,1,0]);
    })

    it("2", () => {
        expect(main(['def', 'de','fgh'], ['de', 'lmn', 'fgh'])).toStrictEqual([1,0,1]);
    });
})