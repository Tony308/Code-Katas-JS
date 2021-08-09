const stripComments = require("../CodeWars/StripComments")


describe("Strip Comment,", () => {
    it.each([
        ["apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges"],
        ["Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne"],
        ["a #b\nc\nd $e f g", ["#", "$"], "a\nc\nd"],
        ["abcd #b \n d\nfd $", ["#", "$"], "abcd\nd\nfd"]
    ])("given %s, %s, %s", (input, markers, expected) => {
        const actual = stripComments(input, markers);
        expect(actual).toEqual(expected);
    })

    it("test search", () => {
        const marker = "$";
        const regex = new RegExp(escapeRegex(marker), "g");
        expect("d $e f g".search(regex)).toEqual(2);
    })

   
});

function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}