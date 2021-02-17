//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function minimumAbsoluteDifference(arr) {
	// After sorting, the numbers will be closer to each other, which is the best outcome for the modulo (e.g. 99 - 99 or 0 - 0)
	const [a, b] = arr.sort((a, b) => a - b).slice(-2);
	let min = Math.abs(a - b);
	for (let i = arr.length - 3; i-- > 0;)
		min = Math.min(min, Math.abs(arr[i] - arr[i + 1]));
	return min;
}