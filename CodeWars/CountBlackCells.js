function countBlackCells(rows, cols) {
    if (rows == 1 || cols == 1) {
        return cols;
    }

    let coordinates = [];
    let gradient = -(rows/cols);
    for (let x = 0;x <= cols;x++) {
        let y = gradient * x + rows;
        coordinates.push([x, y]);
    }
    let cells = 0;

    for (let x = 1;x < cols;x++) {
        const innerArr = coordinates[x];
        const yCoord = innerArr[1];
        if (yCoord % 1 == 0 && x == cols-1) {
            cells +=4;
        } else if (yCoord % 1 == 0) {
            cells += 3;
        } else if (yCoord % 1 > 0 && yCoord % 1 < 1) {
            cells +=2;
        }
    }
    console.log(coordinates);
    return cells;
}


module.exports = countBlackCells;