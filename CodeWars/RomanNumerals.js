const RomanNumerals = {

    romanNumerals: new Map([
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]),
    decimalNumerals: new Map([
        [1000, "M"],
        [500, "D"],
        [100, "C"],
        [50, "L"],
        [10, "X"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ]),
    toRoman(num) {
        const intToRomanMap = new Map([
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"]
        ]);

        let result = "";

        for (const [int, roman] of intToRomanMap) {
            while (num >= int) {
                result += roman;
                num -= int;
            }
        }

        return result;
    },

    // toRoman(input) {
    //     //retrieves value if it exists
    //     const romanExists = this.decimalNumerals.get(input);
    //     if (romanExists) {
    //         return romanExists;
    //     }
    //     //Calculates toRoman
    //     let ans = [];
    //     let mark = input;
    //     const nums = [1000, 500, 100, 50, 10, 5, 1];

    //     for (let x = 0; x < nums.length; x++) {

    //         const current = nums[x];
    //         let remainder = mark % current;
    //         const isRoman = (mark / current);
    //         const repeats = Math.floor(remainder / nums[x + 1]);

    //         if ( repeats >= 4 && isRoman >= 1) {
    //             ans.push(this.decimalNumerals.get(nums[x + 1]));
    //             ans.push(this.decimalNumerals.get(nums[x - 1]));
    //             remainder = mark - (nums[x - 1] - nums[x + 1]);
    //             mark = remainder;
    //             continue;
    //         } else if (isRoman >= 2) {
    //             ans.push(this.decimalNumerals.get(current).repeat(isRoman));
    //             mark = remainder;
    //         } else if (isRoman >= 1 && isRoman < 1.9) {
    //             ans.push(this.decimalNumerals.get(current));
    //             const letters = this.decimalNumerals.get(nums[x + 1]).repeat(repeats);
    //             ans.push(letters);
    //             remainder -= (nums[x + 1] * repeats);
    //             mark = remainder;
    //         } else if (isRoman >= 1) {
    //             ans.push(this.decimalNumerals.get(current));
    //             mark = remainder;
    //         } else if (mark == 4) {
    //             ans.push('IV');
    //             break;
    //         } 
    //         if (remainder <= 0) {
    //             break;
    //         }

    //     }
    //     return ans.join('');
    // },

    fromRoman(input) {
        let total = 0;
        if (this.romanNumerals.get(input)) {
            return this.romanNumerals.get(input);
        }
        for (let index = 0; index < input.length; index++) {
            const val = input[index];
            const current = this.romanNumerals.get(val);
            const next = this.romanNumerals.get(input[index + 1]);

            if (current < next) {
                total += next - current;
                index++;
                continue;
            } else {
                total += this.romanNumerals.get(val);
            }
        }
        return total;
    }
}

module.exports = RomanNumerals;