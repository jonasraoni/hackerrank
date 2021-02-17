//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function twoStrings(s1, s2) {
	const chars = new Set([...s1]);
	for (const c of s2)
		// check which character exists in both
		if (chars.has(c))
			return 'YES';
	return 'NO';
}