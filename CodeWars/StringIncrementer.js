const solution = (str) => {

    if (isNaN(str[str.length -1])) {
        return str + 1;
    } 
    let ans = str.split("");
    let prev = undefined;
    let num = undefined;
    for (let x = ans.length - 1; x >= 0; x--) {
        num = Number(ans[x]);
        if (isNaN(num) && prev === 9) {
            ans[x+1] = 10;
            break;
        } else if (num == 9) {
            ans[x] = 0;
        } else if (!isNaN(ans[x])) {
            ans[x] = ++num;
            break;
        }
        prev = num;

    };
    return ans.join("");
    
}


module.exports = solution;
