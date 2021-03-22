//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function fillingJars(n, operations) {
	const jars = new Array(n).fill(0);
	// Just mark the points where the amount of candies increase/decrease, to avoid passing through all elements on each operation
	for (const [a, b, k] of operations) {
		jars[a - 1] += k;
		if (b < jars.length)
			jars[b] -= k;
	}
	let sum = 0;
	let current = 0;
	// Then pass through the items keeping an accumulator
	for (const jar of jars) {
		current += jar;
		sum += current;
	}
	return Math.floor(sum / n);
}