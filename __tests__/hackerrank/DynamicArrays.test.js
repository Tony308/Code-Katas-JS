const dynamicArray = require("../../HackerRank/DynamicArrays.js")

describe("", () => {
    it("test case 1: easy", () => {
        const actual = dynamicArray(2, [
                [1, 0, 5],
                [1, 1, 7],
                [1, 0, 3],
                [2, 1, 0],
                [2, 1, 1]
            ]
        )
        expect(actual).toStrictEqual([7,3]);
    })

    it.skip("test case 2", () => {
        const actual = dynamicArray(3, [
            [1,1,1],
            [1,1,1],
            [1,1,1],
            [1,1,1],
            [2,1,1],
            [2,1,1],
            [2,1,1],
        ])
        expect(actual).toStrictEqual([1,1,1]);
    });
})