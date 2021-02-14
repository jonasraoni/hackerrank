//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function luckBalance(k, contests) {
	let balance = 0;
	const losable = [];
	for (const [luck, isImportant] of contests) {
		// If it's important, we'll sort it out later
		if (isImportant)
			losable.push(luck);
		// Otherwise, we can count it already
		else
			balance += luck;
	}
	// If we can lose everything, it's not needed to sort
	if (k < losable.length)
		losable.sort((a, b) => b - a);
	for (const luck of losable)
		// While there's room to lose, do it!
		balance += k-- > 0 ? luck : -luck;
	return balance;
}