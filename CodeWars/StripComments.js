const stripComments = (input, markers) => {
    var ans = "";

    input = input.split("\n").map((line, i, arr) => {
        var index = line.length;
        ans = line;
        markers.forEach(marker => {
            const regex = new RegExp(escapeRegex(marker), "g");
            index = ans.search(regex) === -1 ? index : ans.search(regex);
            ans = ans.substring(0, index).trim();
            return ans;
        });
        return ans;
    }).join("\n");
    
    return input;
};

function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

module.exports = stripComments;