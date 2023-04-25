const maxSequence = require("../../CodeWars/MaxSequence");

describe("MaxSeqeunce", () => {
    it("basics", () => {
        expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    })
    it("", () => {
        expect(maxSequence([])).toBe(0);
    })
})