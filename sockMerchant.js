//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function sockMerchant(n, ar) {
	let pairs = 0;
	const map = new Map();
	//counts everything grouped and whenever there's an even amount, increases the pairs
	for (const item of ar) {
		const socks = ~~map.get(item) + 1;
		if (!(socks & 1))
			++pairs;
		map.set(item, socks);
	}
	return pairs;
}