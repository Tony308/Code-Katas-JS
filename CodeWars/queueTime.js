function queueTime(customers, n) {
    //TODO
    if (n <= 1) return customers.reduce((acc, curr) => acc + curr, 0);
    if (customers.length <= n) return Math.max(...customers);
    
    totals = []

    for (let x = 0;x < customers.length;x += n) {
        let tills = customers.slice(x,x+n);
        let total = 0;

        for (let y = 1; y < tills.length; y++) {
            total = tills[y-1] - tills[y];
        }
        totals.push(total);
    }
    return -1;
}

module.exports = queueTime;