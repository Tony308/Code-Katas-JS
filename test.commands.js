for (let x = -8;x <= 8;x++) {
    if (x === 0) continue
    for (let y = -8;y < 9;y++) {
        if (y === 0) continue;
        const diff = x-y
        const points = 10 * diff * diff
        console.log(`x:${x}, ${y} | ${diff} | ${points}`);
    }
    console.log();
}