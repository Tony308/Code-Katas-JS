const getDayName = require('../HackerRank/DayName');

describe("", () => {
    it("", () => {
        const actual = getDayName("10/11/2009");
        expect(actual).toBe("Sunday");
    });

    it("", () => {
        const actual = getDayName("11/10/2010");
        expect(actual).toBe("Wednesday");
    })
})