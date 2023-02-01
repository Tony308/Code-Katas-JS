function run(N, M) {
	/*
	* Write your code below; return type and arguments should be according to the problem\'s requirements
	*/
	
    let sequence = [];
    for (let x = N;x <= M;x++) {
        let current = x;
        if (x % 3 == 0) {
            current = "Fizz";
        } 
        if (x % 3 == 0 && x % 5 == 0) {
            current = "FizzBuzz"
        } else if (x % 5 == 0) {
            current = "Buzz";
        }
        sequence.push(current);
    }
	return sequence.join(",").toString();
}

module.exports = run;