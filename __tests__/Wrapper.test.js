const wrap = require('../CodeWars/WordWrap');

describe("basic", () => {
    it("simple", () => {
        const str = `string`;
        const column = 2;
        const ans = wrap(str, column);
        expect(ans).toEqual(`st\nri\nng\n`);
    })

    it("given short string", () => {
        const str = `s`;
        const column = 2;
        const ans = wrap(str, column);
        expect(ans).toEqual(`s`);
    })

     it("simple", () => {
        const str = `string`;
        const column = 5;
        const ans = wrap(str, column);
        expect(ans).toEqual(`strin\ng`);
    })
})