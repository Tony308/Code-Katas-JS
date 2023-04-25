const queueTime = require("../../CodeWars/queueTime");

describe("queueTime", () => {
    it.only.each([
        // [[], 1, 0],
        // [[1, 2, 3, 4], 1, 10],
        [[2, 2, 3, 3, 4, 4], 2, 9],
        // [[1, 2, 3, 4, 5], 100, 5]
    ])("Given: (%s, %d) then expect: %d", (arr, n, expected) => {
        expect(queueTime(arr, n)).toBe(expected);
    })
    it.each([
        [
            [5, 3, 4], 1, 12
        ],
        [
            [10, 2, 3, 3], 2, 10
        ],
        [
            [2, 3, 10, 2], 2, 10
        ],
    ])("Given: (%s, %d) then expect: %d", (arr, n, expected) => {
        expect(queueTime(arr, n)).toBe(expected);
    });
})