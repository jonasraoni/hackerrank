//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function matchingStrings(strings, queries) {
	// I would use a map, but let it be an array exercise...
	const r = [];
	for (const query of queries) {
		let count = 0;
		for (const s of strings) {
			if (s === query)
				++count;
		}
		r.push(count);
	}
	return r;
}