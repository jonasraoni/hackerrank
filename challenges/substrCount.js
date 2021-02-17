//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function substrCount(n, s) {
	// list of active substrings
	const active = [];
	let count = 0;
	for (let i = -1; ++i < s.length;) {
		const c = s[i];
		// first check the active substrings
		for (let j = active.length; j--;) {
			const [c2, size] = active[j];
			// if the char matches our "special group"
			if (c === c2) {
				// adds 1 to our dynamic (explained below) counter, if it's zero, we've reached our target (it's equalized), so count it and remove
				if (!++active[j][1]) {
					active.splice(j, 1);
					++count;
				}
				// if the size is positive, it means that a breakpoint (when the repetition ends) wasn't reached yet, but that also means that we've got a duplicated character, so count the sequence
				else if (size > 0)
					++count;
			}
			// if there wasn't a match, we need to check if the substring was accumulating repetitions, if yes, so we turn the number negative (lazy flag)
			else if (size > 0)
				active[j][1] = -size;
			// if a breakpoint was already reached before, it means that this substring isn't suitable, just discard it...
			else
				active.splice(j, 1);
		}
		// add the character to the list of valid substrings with a size of 1, perhaps it can grow...
		active.push([c, 1]);
		// counts all the characters
		++count;
	}
	return count;
}