const MORSE_CODE = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
};

function decodeBits(bits){
    var morseVals = new Set();
    var signature = []

    bits = bits.replace(/^0+|0+$/g, "")
    if (!bits.includes('0')) return '.'
    
    bits.split('').forEach((val,x) => {
        signature.push(val)
        if (val !== bits[x+1]) {
            morseVals.add(signature.join(''))
            signature = []
        }
    })

    var ones = []
    var zeros = []

    morseVals.forEach(val => {
        val.includes('1') ? ones.push(val) : zeros.push(val)
    })

    var [dot, dash] = ones.sort()
    var [pause, cPause, wordPause] = zeros.sort()
    
    if (pause.length < dot.length) {
        dash = dot
        dot = '1'.repeat(pause.length)
    }
    
    if (!dot) dot = '1'
    if (!dash) dash = dot.repeat(3)
    if (!pause) pause = '0'.repeat(dot.length)
    if (!cPause) cPause = '0'.repeat(dot.length).repeat(3)
    if (!wordPause) wordPause = '0'.repeat(dot.length).repeat(7)

    return bits.split(wordPause).map(val => {
        return val.replace(new RegExp(dash, 'g'), '-').replace(new RegExp(dot, 'g'), '.')
        .replace(new RegExp(cPause, 'g'), ' ').replace(new RegExp(pause, 'g'), '')
    }).join('   ')
}

function decodeMorse(morseCode){
    return morseCode.split('   ').map(val => val.split(' ').map(v => MORSE_CODE[v]).join('')).join(' ')
}

module.exports = {
    decodeBits, decodeMorse
}