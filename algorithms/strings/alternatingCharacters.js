//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function alternatingCharacters(s) {
	let changes = 0;
	//just count duplicated
	for (let i = s.length; --i;)
		if (s[i] === s[i - 1])
			++changes;
	return changes;
}