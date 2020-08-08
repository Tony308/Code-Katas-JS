const {decodeMorse} = require('../CodeWars/DecodeMorse')

describe.only('Decode Morse', () => {
    it('', () => {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe( 'HEY JUDE')
    })
    it('', () => {
        expect(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '))
        .toBe('SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
    })
    it('EE', () => {
        expect(decodeMorse('   .   . ')).toBe( 'E E')
    })

})