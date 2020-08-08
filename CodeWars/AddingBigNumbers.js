function add(a, b) {
    if (a.length > b.length) {
        return add(b,a)
    }

    var total = literalAdd(a,b)
    return total.join('')
}


function literalAdd(a,b) {
    var total = []
    var temp = Array(b.length).fill(0)
    a = [...a];
    a.unshift(...Array(b.length - a.length).fill(0))

    for (let x = a.length-1;x > -1;x--) { 
        var ans = Number(a[x]) + Number(b[x])
        const carry = temp[x-1]
        if (ans > 9 && carry == undefined) {
            temp.unshift(1)
        } else if (ans > 9) {
            temp[x-1] += 1
        }
        ans = ans.toString()
        total.unshift(ans[ans.length-1])
    }
    for (let x = 0;x < b.length - a.length;x++) {
        total[x] = b[x]
    }

    const noLeftovers = temp.every(val => val < 1)
    
    if (!noLeftovers) {
        return literalAdd(total, temp)
    }

    return total
}

module.exports = {
    add
}
