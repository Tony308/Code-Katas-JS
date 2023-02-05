function validParentheses(parens) {
    // your code here ..
    if (parens.length == 0 )
        return true;
    if (parens[0] == ")" || parens[parens.length - 1] == "(")
        return false;

    let open = 0;
    let closed = 0;

    for (let x = 0; x < parens.length;x++) {
        let v = parens[x];
        if (v == "(") {
            ++open;
        } else if (v == ")") {
            ++closed;
        }
        if (closed > open) {
            return false;
        }
    }
    if (open == closed) {
        return true;
    }
    return false;
}

module.exports = validParentheses;