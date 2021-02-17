//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function reverseShuffleMerge(s) {
	const required = new Map();
	const used = new Map();
	const available = new Map();
	for (const c of s) {
		// As the string "S" is formed by the reverse of S + scrambled S, it means each character should appear twice...
		// So we know which characters should be part of the original string and how many times they should appear
		const amount = (required.get(c) || 0) + .5;
		// Keep the required amount (static reference) of characters to form the string
		required.set(c, amount);
		// As we collect chars, this will be used to monitor how many still exists ahead...
		available.set(c, amount * 2);
	}
	const origin = [];
	// Reverse the string by making a loop from the end to the beginning
	for (let i = s.length; i--; ) {
		const c = s[i];
		const count = used.get(c) || 0;
		// If the current character is useful
		if (count < required.get(c)) {
			// Check if we can replace the last character we stored by a lexicographically smaller one...
			for (let last; origin.length && (last = origin[origin.length - 1]) > c; origin.pop()) {
				if (used.get(last) + available.get(last) <= required.get(last))
					break;
				used.set(last, used.get(last) - 1);
			}
			// Use character
			used.set(c, count + 1);
			origin.push(c);
		}
		// Decrease the availability
		available.set(c, available.get(c) - 1);
	}
	return origin.join('');
}