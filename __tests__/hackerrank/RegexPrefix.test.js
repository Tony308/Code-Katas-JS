const main = require("../../HackerRank/RegexPrefix");

describe('', () => {
    it.each([
        ["Mr.X", true],
        ["Mrs.Y", true],
        ["Dr.X", true],
        ["Er.Cunt",true],
        ["Ms.Cunt",true],
        ["Er. cunt", false],
        ["XYZMr.X", false],
        ["mr.x", false],
        ["dr.Mr.y", false],
        ["Mr.", false],
        ["Mr.y12", false]
    ])("String: %s", (s, expected) => {
        expect(main(s)).toBe(expected);
    })
})