const validParentheses = require('../CodeWars/ValidParentheses');
describe("Tests", () => {
    it(`values: "("`, () => expect(validParentheses("(")).toBeFalsy());
    it(`values: ")"`, () => expect(validParentheses(")")).toBeFalsy());
    it(`values: ""`, () => expect(validParentheses("")).toBeTruthy());
    it(`values: "()"`, () => expect(validParentheses("()")).toBeTruthy());
    it(`values: "())"`, () => expect(validParentheses("())")).toBeFalsy());
    it("values: '())(", () => {
        expect(validParentheses("())(")).toBeFalsy();
    })
    it("values: ())(()", () => {
        expect(validParentheses('())(()')).toBeFalsy();
    });
    it("values: ())(()", () => {
        expect(validParentheses('())(()')).toBeFalsy();
    });
});