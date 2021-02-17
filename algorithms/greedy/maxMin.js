//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function maxMin(k, arr) {
	arr.sort((a, b) => a - b);
	let min = arr[--k] - arr[0];
	// With the array sorted, we just need to loop by groups of k
	for (let i = 0, l = arr.length - k; ++i < l; )
		min = Math.min(min, arr[i + k] - arr[i]);
	return min;
}