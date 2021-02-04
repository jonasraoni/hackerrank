//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function countSwaps(a) {
	let swaps = 0;
	for (let l = a.length, j = 0, i = l; i--; ++j) {
		for (let k = l; --k > j;) {
			if (a[k] < a[k - 1]) {
				++swaps;
				[a[k], a[k - 1]] = [a[k - 1], a[k]];
			}
		}
	}
	console.log(`Array is sorted in ${swaps} swaps.`);
	console.log(`First Element: ${a[0]}`);
	console.log(`Last Element: ${a[a.length - 1]}`);
}