//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function dynamicArray(n, queries) {
	const data = Array.from({ length: n }, () => []);
	let lastAnswer = 0;
	const r = [];
	for (const query of queries) {
		const [type, x, y] = query;
		const list = data[(x ^ lastAnswer) % n];
		if (type == 1)
			list.push(y);
		else
			r.push(lastAnswer = list[y % list.length]);
	}
	return r;
}