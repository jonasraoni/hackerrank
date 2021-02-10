//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function isValid(s) {
	const map = new Map();
	for (const c of s)
		map.set(c, (map.get(c) || 0) + 1);

	const frequencies = [...map.values()];
	let current = frequencies[0];
	if (frequencies.length > 2) {
		if (current !== frequencies[1])
			current = frequencies[2];
	}

	let isAdjusted = false;
	for (const frequency of frequencies) {
		if (frequency !== current) {
			if (isAdjusted || (frequency !== 1 && Math.abs(frequency - current) > 1))
				return 'NO';
			isAdjusted = true;
		}
	}
	return 'YES';
}