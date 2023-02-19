/**
 * 
 * @param {Number} n - the number of movies in the stack 
 * @param {Number} m - the number of movies he wants to watch 
 * @param {String} movies - an array with m integers a1 . . . am (1 <= ai <= n) representing the identification numbers of movies that he wants to watch 
  * @returns {String} movies_array 
 */
function run(n, m, movies) {
	let stack = Array.from({length: n}, (_, index) => index + 1);
	let movies_array = [];  

	for (let x = 0;x < m;x++) {
		const filmToWatch = movies[x];
        const movieIndex = stack.indexOf(filmToWatch);
		const selectedMovie = stack[movieIndex];
        stack.splice(movieIndex, 1);
        const moviesAbove = movieIndex;
        movies_array.push(moviesAbove);
        stack.unshift(selectedMovie);
	}
	return movies_array.join(',');
}

module.exports = run;