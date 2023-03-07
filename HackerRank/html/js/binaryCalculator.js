function handleClick(e) {
    const btn = e;
    let res = document.getElementById("res");
    
    switch (btn.id) {
        case 'btn0':
            res.innerHTML += "0";
            break;
        case "btn1":
            res.innerHTML += "1";
            break;
        case "btnClr":
            res.innerHTML = "";
            break;
        case "btnEql":
            const string = res.innerHTML;
            const operator = string.match(/[\-\*\/\+]/g)[0];
            let [eins, zwei] = string.match(/\d+/g);
            eins = parseInt(eins, 2);
            zwei = parseInt(zwei, 2);
            const ans = Number(Math.floor(eval(eins + operator + zwei)));
            res.innerHTML = (ans >>> 0).toString(2);
            break;
        case "btnSum":
            res.innerHTML += '+';
            break;
        case "btnSub":
            res.innerHTML += "-";
            break;
        case "btnDiv":
            res.innerHTML += "/";
            break;
        case "btnMul":
            res.innerHTML += "*";
            break;
        default:
            break;
    }
}
// function binaryOrConvertToBinary(input) {
//     // If the input is already a binary string, return it
//     if (/^[01]+$/.test(input)) {
//         return input;
//     }

//     // Otherwise, try to parse the input as a number
//     const num = Number(input);

//     // If the input is not a number or it's NaN, return undefined
//     if (isNaN(num)) {
//         return input;
//     }

//     // Convert the number to binary
//     return (num >>> 0).toString(2);
// }