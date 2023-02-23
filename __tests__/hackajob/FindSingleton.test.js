const run = require("../../HackaJob/FindSingleton")


describe("Solution", function () {
	
	it("test run", function () {
        let s_list = [5,3,2,2,3,5,4,6,9,6,4,12,8,9,12];
		expect(run(s_list)).toBe(8);
	});

    it("test run", function () {
        let s_list = [2,4,5,4,2];
		expect(run(s_list)).toBe(5);
	});
});
