//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function sherlockAndAnagrams(s) {
	// keeps the amount of matched substrings
	const map = new Map();
	// maximum length of the substring
	const max = s.length - 1;
	// prepares an array to save all the possible substring combinations
	const groups = new Array(max * (max + 1) >> 1).fill('');
	for (let i = -1; ++i < s.length;) {
		for (let length = max; length--;) {
			// amount of characters to skip for the given combination
			for (let skip = length + 1; skip--;) {
				if (skip > i)
					continue;
				const index = length * (length + 1) / 2 + skip;
				let current = groups[index] += s[i];
				//if the expected length of the combination was reached, count it up
				if (!((i - skip + 1) % (length + 1))) {
					// but before, we need to normalize it
					// ps: I've tried to use charCodeAt(), but I forgot about possible overlaps (1 + 2 + 2 == 1 + 1 + 3)
					current = [...current].sort().join('');
					map.set(current, (map.get(current) || 0) + 1);
					// reset the group
					groups[index] = '';
				}
			}
		}
	}

	const cache = new Map();
	const fatorial = n => {
		let v = cache.get(n);
		if (!v) {
			v = 1;
			for (let i = v; ++i <= n; v *= i);
			cache.set(n, v);
		}
		return v;
	}

	let pairs = 0;
	for (const count of map.values()) {
		if (count > 1) {
			// if there's at least one pair, then we can use a combination formula
			pairs += fatorial(count) / (2 * fatorial(count - 2));
		}
	}
	return pairs;
}