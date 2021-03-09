//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function icecreamParlor(money, cost) {
	const priceMap = new Map();
	let i = 0;
	for (const price of cost) {
		const data = priceMap.get(price);
		if (!data)
			priceMap.set(price, [++i]);
		else
			data.push(++i);
	}

	let first = 0;
	for (const price of cost) {
		++first;
		const remaining = money - price;
		if (remaining < 0)
			continue;
		let index = priceMap.get(remaining);
		if (index && first !== (index = index.pop()))
			return [first, index];
	}
}