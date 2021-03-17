//+ Jonas Raoni Soares Silva
//@ http://raoni.org

// Extended solution (just got the idea after I saw "Bit Manipulation" haha), the xor will take care of enabling/disabling (something like my next solution)
function lonelyinteger(a) {
	return a.reduce((v, current) => current ^= v, 0);
}

// "Natural" solution
function lonelyinteger2(a) {
	const unique = new Set();
	// Considering all items appear twice, except one, we can just add/remove and in the end the forever alone will remain
	for (const n of a) {
		if (unique.has(n))
			unique.delete(n);
		else
			unique.add(n);
	}
	return [...unique].pop();
}