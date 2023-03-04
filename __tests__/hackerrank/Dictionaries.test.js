const run = require('../../HackerRank/Dictionaries');
const fs = require('fs');

var inputFile;
var outputFile;
describe("30 days of code: Dictionaries", () => {
    beforeAll(async() => {
        inputFile = fs.readFileSync("__mocks__/DictionariesInput.mock.js", {
            encoding:"ascii"
        });
        outputFile = fs.readFileSync("__mocks__/DictionariesOutput.mock.js", {
            encoding: "ascii"
        });
        fs.close(2);
    })
    it('test case 0', () => {
        const actual = run('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry\ncunt');
        expect(actual).toBe("sam=99912222\nNot found\nharry=12299933\nNot found");
    });
    it('', () => {
        const n = 4;
        const contacts = ["cunt 1234", "fuck 4321", "hell 666", "heaven 777"];
        const lookups = ['cunt', 'fuck', 'hell', 'heaven', 'joe', 'mama'];
        const actual = run(`${n}\n${contacts.join('\n')}\n${lookups.join("\n")}`);
        expect(actual).toBe("cunt=1234\nfuck=4321\nhell=666\nheaven=777\nNot found\nNot found");
    })
    it('', () => {
        const actual = run("2\ncunt 1234\ncunt 5678\ncunt\ncunt123");
        expect(actual).toBe("cunt=5678\nNot found");
    })
    it.skip('test case 1', () => {
        
        const actual = run(inputFile);
        expect(actual).toBe(outputFile);
    })
})
