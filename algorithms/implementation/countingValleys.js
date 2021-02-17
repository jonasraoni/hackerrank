//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function countingValleys(steps, path) {
	let current = 0;
	let valleys = 0;
	for (const item of path) {
		const isDownHill = item === 'D';
		//whenever we're in the floor and the altitude goes down, it's a valley
		if (!current && isDownHill) {
			++valleys;
		}
		//updates the altitude
		current += isDownHill ? -1 : 1;
	}
	return valleys;
}