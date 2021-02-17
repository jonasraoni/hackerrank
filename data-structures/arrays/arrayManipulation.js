//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function arrayManipulation(n, queries) {
	const values = new Array(n).fill(0);
	//mark the start/end of places where k is added/removed
	for (const [a, b, k] of queries) {
		values[a - 1] += k;
		values[b] -= k;
	}

	let max = 0;
	let sum = 0;
	//pass through the values, accumulating the changes and calculating which one was the max
	for (const v of values) {
		if ((sum += v) > max)
			max = sum;
	}

	return max;
}