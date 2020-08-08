const { alternatingCharacters } = require('../HackerRank/Alternating Characters')

describe.skip('Alternating Characters', () => {
    it('', () => {
        expect(alternatingCharacters(`AAAA`)).toBe(3)
    })
    it('', () => {
        expect(alternatingCharacters(`BBBBB`)).toBe(4)
    })
    it('', () => {
        expect(alternatingCharacters(`ABABABAB`)).toBe(0)
    })
    it('', () => {
        expect(alternatingCharacters(`BABABA`)).toBe(0)
    })
    it('', () => {
        expect(alternatingCharacters(`AAABBB`)).toBe(4)
    })
    it('hard', () => {
        expect(alternatingCharacters('ABBABBAA')).toBe(3)
    })

    it('medium', () => {
        expect(alternatingCharacters("AAABBBAABB")).toBe(6)
        expect(alternatingCharacters("AABBAABB")).toBe(4)
        expect(alternatingCharacters("ABABABAA")).toBe(1)
    })
})