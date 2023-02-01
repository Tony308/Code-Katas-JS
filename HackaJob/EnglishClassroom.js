function run(morseToEnglish, textToTranslate) {
    /*
     * Write your code below; return type and arguments should be according to the problem\'s requirements
     */
    if (textToTranslate.length < 1 || textToTranslate.match(/\s{4}/g)) {
        return "Invalid Morse Code Or Spacing";
    }
    return morseToEnglish ?  translateEnglish(textToTranslate.toLowerCase()) : translateMorseCode(textToTranslate.toLowerCase());
}

const translateMorseCode = (input) => {
    let alphabet = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
        '.': '.-.-.-',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----',
    }
    return input.split(" ").map((word) => {
        return word
        .split("")
        .map((letter) => alphabet[letter])
        .join(" ");
    })
    .join("   ");
}

const translateEnglish = (input) => {
    let codes = {
        '.-.-.-': ".",
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
    };

    return input.split("   ").map((word) => {
        return word
        .split(" ")
        .map(letter => codes[letter])
        .join("");
    })
    .join(" ")
}

module.exports = run;