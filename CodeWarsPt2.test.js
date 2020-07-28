const {firstNonRepeatingLetter, validSolution, pigIt, replicate, capitalizeWord, alphabetPosition, domainName} = require('./CodeWars/CodeWarsPt2');

describe('Replicate', () => {
    it('', () => {
        expect(replicate(3,5)).toStrictEqual([5, 5, 5]);
    })
    it('', () => {
        expect(replicate(5,1)).toStrictEqual([1, 1, 1, 1, 1])
    })
    it('', () => {
        expect(replicate(0,12)).toStrictEqual([])
    })
    it('', () => {
        expect(replicate(-1,12)).toStrictEqual([])
    })
    it('', () => {
        expect(replicate(8,0)).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0]); 
    })
})

describe('CapitalizeWord', () => {
    it('', () => {
        expect(capitalizeWord('word')).toBe( 'Word');
    })
    it('', () => {
        expect(capitalizeWord('i')).toBe('I');
    })
    it('', () => {
        expect(capitalizeWord('glasswear')).toBe('Glasswear');
    })
})

describe('AlphabetPosition', () => {
    it('', () => {
        expect(alphabetPosition("The sunset sets at twelve o' clock.")).toBe( "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
    })
    it('', () => {
        expect(alphabetPosition("The narwhal bacons at midnight.")).toBe("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")
    })
})

describe('DomainName', () => {
    it('google.com', () => {
        expect(domainName("http://google.com")).toBe( "google");
    })
    it('google.co', () => {
        expect(domainName("http://google.co.jp")).toBe( "google");
    })
    it('xakep', () => {
        expect(domainName("www.xakep.ru")).toBe( "xakep");
    })

    it('youtube/hp', () => {
        expect(domainName("https://youtube.com")).toBe( "youtube");
    })
    it('ikzj8', () => {
        expect(domainName("www.ikzj8.br/default.html")).toBe('ikzj8');
    })
    it('empty string', () => {
        expect(domainName('https://www.google.com/searchw=fdsf')).toBe('google')
        expect(domainName('/www.')).toBe('')
    })
})

describe('pigIt', () => {
    it('', () =>{
        expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
    })
    it('', () =>{
        expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay')
    })
})


describe('ValidSolution', () => {
    it('true', () => {
        expect(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]])).toBeTruthy()
    })

    it('false', () => {
        expect(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
            [6, 7, 2, 1, 9, 0, 3, 4, 8],
            [1, 0, 0, 3, 4, 2, 5, 6, 0],
            [8, 5, 9, 7, 6, 1, 0, 2, 0],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 0, 1, 5, 3, 7, 2, 1, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 0, 0, 4, 8, 1, 1, 7, 9]])).toBeFalsy()
   })
})

describe.only('FirstNonRepeatingLetter', () => {
    it('a', () => {
        expect(firstNonRepeatingLetter('a')).toBe('a');
    })
    it('t', () => {
        expect(firstNonRepeatingLetter('stress')).toBe('t');  
    })
    it('e', () => {  
        expect(firstNonRepeatingLetter('moonmen')).toBe('e');
    })
    it('empty', () => {
        expect(firstNonRepeatingLetter(`abba`)).toBe('')
    })
    it('empty', () => {
        expect(firstNonRepeatingLetter(`aa`)).toBe('')
    })
    it(',', () => {
        expect(firstNonRepeatingLetter(`Go hang a salami, I'm a lasagna hog!`)).toBe(',')
    })
    it(',', () => {
        expect(firstNonRepeatingLetter(`sTreSS`)).toBe('T')
    })
})