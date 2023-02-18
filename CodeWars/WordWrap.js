const Wrapper = (str, col) => {
    return str
        .split("")
        .map((letter, index, arr) => (index + 1) % col == 0 ? `${letter}\n` : letter)
        .join("");
}

module.exports = Wrapper;