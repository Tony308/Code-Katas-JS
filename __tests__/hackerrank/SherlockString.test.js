const {isValid} = require('../../HackerRank/SherlockString')

describe.skip('IsValid() ', () => {
    it('', () => {
        expect(isValid('aabbcd')).toBe('NO')
    })
    it('', () => {
        expect(isValid('aabbccddeefghi')).toBe('NO')
    })
    it('', () => {
        expect(isValid('abcdefghhgfedecba')).toBe('YES')
    })
})