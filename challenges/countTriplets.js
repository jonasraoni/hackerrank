//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function countTriplets(arr, r) {
	let triplets = 0;
	const dict = new Map(),
		pairs = new Map();
	for (let i = arr.length; i--;) {
		const n = arr[i];
		const next = n * r;
		triplets += pairs.get(next) || 0;
		if (dict.has(next))
			pairs.set(n, (pairs.get(n) || 0) + dict.get(next));
		dict.set(n, (dict.get(n) || 0) + 1);
	}
	return triplets;
}