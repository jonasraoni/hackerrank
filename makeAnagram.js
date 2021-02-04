//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function makeAnagram(a, b) {
	const map = new Map();
	//adds characters from a to the map
	for (const c of a)
		map.set(c, (map.get(c) || 0) + 1);

	let changes = 0;
	for (const c of b) {
		const count = map.get(c);
		if (count)
			if (count < 2)
				map.delete(c);
			else
				map.set(c, count - 1);
		else
			++changes;
	}
	return changes + [...map.values()].reduce((t, c) => t += c, 0);
}