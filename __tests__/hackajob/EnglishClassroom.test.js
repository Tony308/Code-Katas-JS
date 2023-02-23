const run = require('../../HackaJob/EnglishClassroom');

describe("Solution", function () {
	

	it("test run", function () {
        let input = "The wizard quickly jinxed the gnomes before they vaporized.";
        let ans = "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-";
		expect(run(false, input)).toBe(ans);
	});

    it("re-morse", () => {

        let input = "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-";
        expect(run(true, input)).toBe("the wizard quickly jinxed the gnomes before they vaporized.");
    })
    it.only("invalid", () => {
        expect(run(true, "..- .... ..-. .-.. --- .-    ...-")).toBe("Invalid Morse Code Or Spacing");
    })
});
