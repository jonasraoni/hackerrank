//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function triplets(a, b, c) {
	const binarySearch = (o, v, i) => {
		let h = o.length, l = -1, m;
		while(h - l > 1)
			if(o[m = h + l >> 1] < v) l = m;
			else h = m;
		return o[h] != v ? i ? h : -1 : h;
	};
	// Remove duplicates and sort
	[a, b, c] = [a, b, c].map(v => [...new Set(v)].sort((a, b) => a - b));

	let count = 0;
	// As the rules are based on "q", we can use it to make the loop
	for (const q of b) {
		let indexes = [a, c]
			//Get the index of a number bigger than q. When not found, the binary search function returns the "insert index" (0 or length - 1)
			.map(list => {
				let index = binarySearch(list, q + 1, true);
				// Just checking if a smaller p and r were found, considering the rules above
				if (list[index] >= q + 1 || list[index - 1] <= q)
					index = index - 1;
				// If not found, returns -1
				return index === list.length ? -1 : index + 1;
			});
		// If nothing was found, quit, our q is too big...
		if (!indexes.some(v => ~v))
			break;
		count += indexes[0] * indexes[1];
	}
	return count;
}