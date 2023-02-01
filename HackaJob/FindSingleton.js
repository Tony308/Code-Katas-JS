function run(student_list) {
	/*
	* Write your code below; return type and arguments should be according to the problem\'s requirements
     INPUT int[]    student_list
     OUTPUT int    single_student_number 
    
	*/
    let list = student_list.sort((a, b) => a - b);
    for (let x = 0; x < list.length; x += 2) {
        if (list[x] !== list[x+1]) {
            return list[x];
        }

    }
	return -1;
}

module.exports = run;