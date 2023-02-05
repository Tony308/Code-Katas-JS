const solution = require('../CodeWars/StringIncrementer');

function doTest(input, expected) {
    const actual = solution(input);
    expect(actual).toBe(expected);
}
describe("", () => {
    it("basic", () => {
        expect(solution('foobar000')).toBe('foobar001');
        expect(solution('1')).toBe('2');

    })

    it("sample tests", () => {
        doTest("foobar000", "foobar001");
        doTest("foobar999", "foobar1000");
        doTest("foobar00999", "foobar01000");
        doTest("foo", "foo1");
        doTest("foobar001", "foobar002");
        doTest("foobar1", "foobar2");
        doTest("1", "2");
        doTest("009", "010");
        doTest("fo99obar99", "fo99obar100");
        doTest("0", "1");
        doTest("0fdsaf0fsda0f12", "0fdsaf0fsda0f13");
        doTest("asdfasdf", "asdfasdf1");
        doTest("x.@f6a%5s0123", "x.@f6a%5s0124");
        doTest("-2", "-1");
    });
})