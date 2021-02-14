//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function getMinimumCost(k, c) {
	// I found the description weird, but after I understood, it became easy xD
	if (k <= c.length)
		c.sort((a, b) => b - a);
	let sum = 0;
	for (let accumulator = 0, i = -1, l = c.length; ++i < l; )
		sum += (i % k ? accumulator : ++accumulator) * c[i];
	return sum;
}