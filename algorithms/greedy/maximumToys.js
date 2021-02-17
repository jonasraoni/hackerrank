//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function maximumToys(prices, k) {
	prices.sort((a, b) => a - b);
	let count = 0;
	for (const price of prices) {
		if ((k -= price) >= 0)
			++count;
		else
			break;
	}
	return count;
}