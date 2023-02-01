const run = require('../HackaJob/FizzBuzz');

describe("Solution", function () {
	//
	//	Second Example
	//
	//
	it("test run", function () {
		expect(run(1,5)).toBe("1,2,Fizz,4,Buzz");
	});
});
