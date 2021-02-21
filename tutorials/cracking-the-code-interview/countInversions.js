//+ Jonas Raoni Soares Silva
//@ http://raoni.org

// Currently failing at the heavy tests ;_;
// It's clear that I have to find a way to avoid updating the original array, but I need some free time to think about it

function countInversions(arr) {
	const binarySearch = (o, v, i) => {
		let h = o.length,
			l = i - 1,
			m;
		while (h - l > 1)
			if (o[m = h + l >> 1] < v) l = m;
			else h = m;
		return h;
	};
	let inversions = 0;
	for (let l = arr.length, i = arr.length; --i;)
		if (arr[i - 1] > arr[i]) {
			const insert = binarySearch(arr, arr[i - 1], i);
			for (let j = i - 1; ++j < insert;)
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			inversions += insert - i;
		}
	return inversions;
}