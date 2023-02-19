const RomanNumerals = {

    romanNumerals: {
        "I": 1,
        "IV": 4,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    },
    decimalNumerals: {
        1: "I",
        4: "IV",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    },

    toRoman(input) {
        //retrieves value if it exists
        const romanExists = this.decimalNumerals[input];
        if (romanExists) {
            return romanExists;
        }
        //Calculates toRoman
        let ans = [];

        let nums = [1000, 500, 100, 50, 10, 5, 4, 1];
        let mark = input;

        for (let x = 0; x < nums.length; x++) {
            const current = nums[x];
            let remainder = mark % current;
            const isRoman = (mark / current);

            if (isRoman == 0 && remainder <= 0) {
                break;
            }
            const repeats = Math.floor(remainder / nums[x + 1]);

            if (isRoman >= 1 && repeats >= 4) {
                ans.push(this.decimalNumerals[nums[x + 1]]);
                ans.push(this.decimalNumerals[nums[x - 1]]);
                remainder = mark - (nums[x - 1] - nums[x + 1]);
                mark = remainder;
                continue;
                // } else if (-1) {
                //     ans.push(this.decimalNumerals[current]);
                //     mark = remainder;
            } else if (isRoman >= 1) {
                ans.push(this.decimalNumerals[current]);
                const letters = this.decimalNumerals[nums[x + 1]];
                ans.push(letters);
                remainder -= (nums[x + 1] * repeats);
                mark = remainder;
            }
        }
        return ans.join("");
    },

    fromRoman(input) {
        if (this.romanNumerals[input]) {
            return this.romanNumerals[input];
        }
        return input.split("").reduce((total, curr, i, arr) => {});
    }
}

module.exports = RomanNumerals;