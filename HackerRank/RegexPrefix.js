const regexPrefix = (s) => {
    let re = /(^(Mr|Mrs|Dr|Er|Ms))\.([a-zA-Z]{1,})$/g;
    return re.test(s)
}
module.exports = regexPrefix;