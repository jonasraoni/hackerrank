//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function hoursglassSum(arr) {
	let max = null;
	//nothing special here, just pass through all the hourglasses and counts them, already keeping track of the biggest
	for (let i = 4; i--;) {
		for (let j = 4; j--;) {
			const sum = [...arr[i].slice(j, j + 3), arr[i + 1][j + 1], ...arr[i + 2].slice(j, j + 3)].reduce((c, s) => s += c, 0);
			max = max === null ? sum : Math.max(max, sum);
		}
	}
	return max;
}