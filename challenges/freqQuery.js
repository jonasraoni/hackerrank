//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function freqQuery(queries) {
	const map = new Map();
	const frequencies = new Map();
	const result = [];
	for (const [operation, value] of queries) {
		if (operation === 3) {
			const frequency = frequencies.get(value);
			result.push(+!!(frequency && frequency.size > 0));
			continue;
		}
		let amount = map.get(value) || 0;
		if (amount)
			frequencies.get(amount).delete(value);

		if (~(operation === 1 ? ++amount : --amount)) {
			map.set(value, amount);
			if (amount) {
				let values = frequencies.get(amount);
				if (!values) {
					values = new Set();
					frequencies.set(amount, values);
				}
				values.add(value);
			}
		}
	}
	return result;
}