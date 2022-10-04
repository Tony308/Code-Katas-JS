function isValidWalk(walk) {
    //insert brilliant code here
    let timer = 0;

    let north = 0;
    let south = 0;
    let west = 0;
    let east = 0;

    walk.forEach(element => {
        if (element = "n") {
            north++;
        } else if (element = "s") {
            south++;
        } else if (element = "w") {
            west++;
        } else if (element = "e") {
            east++;
        }
        if (timer++ == 10 && (north != south || west != east)) { 
            return false;
        }
    });
    return true;
}

module.exports = isValidWalk;