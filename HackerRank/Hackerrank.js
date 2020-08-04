function gradingStudents(grades) {
    for (let x = 0;x < grades.length;x++) {
        let nearest = Math.ceil(grades[x]/5) * 5;
        if (grades[x] < 38) {
            continue;
        } else if ((nearest - grades[x]) < 3) {
            grades[x] = nearest;
        }   
    }
    return grades;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var fallenA = 0;
    var fallenB = 0;

    for (let x = 0;x < apples.length;x++) {
        if (apples[x] < 0) { 
            // console.log(apples[x]);
            continue;
        }
        if (a + apples[x] >= s && (a + apples[x]) <= t ) {
            fallenA++;
        }
    }

    for (let x = 0;x < oranges.length;x++) {
        if (oranges[x] > 0) {
            // console.log(oranges[x]);
            continue;
        }
        console.log('b: %s, d: %s', b, oranges[x]);

        if (b + oranges[x] <= t && b + oranges[x] >= s) {
            fallenB++;
        }
    }
    console.log(fallenA);
    console.log(fallenB);
}

function kangaroo(x1, v1, x2, v2) {
    if ((x1 < x2 && v1 < v2) || (x1 > x2 && v1 > v2) ) {
        return 'NO';
    }
    if ((x1 - x2) % (v2 - v1) === 0) {
        return 'YES';
    } else {
        return "NO";
    }
}

function getTotalX(a, b) {
    // Write your code here
    var result = 0;
    var factor = true;
    for (let x = 0;x < b.length;x++) {
        for (let y = 0;y < a.length;y++) {
            // console.log(`b: ${b[x]}, a: ${a[y]}`);
            if (b[x] % a[y] === 0 && (b[x] / a[y]) % a[y] === 0) {

            } else {
                
            }
        }

    }
    console.log(result);
    return result;
}

