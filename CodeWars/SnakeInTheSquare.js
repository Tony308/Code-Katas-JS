var distribution = function(size) {
    var width = Math.ceil(Math.sqrt(size));    
    width = calculateWidth(size, width);
    const ans = drawSnake(size, width);
    return ans;
}

function calculateWidth(size, width) {
    const singleColumns = Math.floor(width / 2);
    const requiredSize = Math.round(singleColumns * (width - 1) + size);
    const newWidth = Math.ceil(Math.sqrt(requiredSize));
    if (width === newWidth) {
        return width;
    } else {
        return calculateWidth(size, newWidth);
    }
}

function createGrid(width) {
    let ans = [];
    for (let x = 0;x < width;x++) {
        ans.push(new Array(width).fill(0))
    }
    return ans;
}

function drawSnake(size, width) {
    var snakeParts = 0;
    let ans = createGrid(width);
    let column = 0;
    while (snakeParts < size) {        
        for (let x = 0;x < width;x++) {
            if (snakeParts >= size) {
                break;
            }
            ans[x][column] = 1; 
            snakeParts++;
        }
        if (snakeParts >= size) {
            break;
        }
        column++;
        ans[width-1][column] = 1;
        snakeParts++;
        column++;
        for (let x = width-1;x > -1;x--) {
            if (snakeParts >= size) {
                break;
            }
            ans[x][column] = 1; 
            snakeParts++;
        }
        if (snakeParts >= size) {
            break;
        }
        column++;
        ans[0][column] = 1;
        snakeParts++;
        column++;
    }
    return ans;
}
module.exports = {
    distribution
}