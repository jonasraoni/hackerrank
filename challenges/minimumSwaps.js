//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function minimumSwaps(arr) {
	let swaps = 0;
	let map = null;
	for (let i = -1, l = arr.length; ++i < l - 1;) {
		if (arr[i] !== i + 1) {
			if (!map) {
				map = new Map();
				for (let j = i; ++j < l;) {
					map.set(arr[j], j);
				}
			}
			const j = map.get(i + 1);
			map.set(arr[i], j);
			[arr[i], arr[j]] = [arr[j], arr[i]];
			++swaps;
		}
	}
	return swaps;
}

function minimumSwaps2(arr) {
	let swaps = 0;
	for (let i = -1, l = arr.length; ++i < l - 1;) {
		if (arr[i] !== i + 1) {
			for (let j = i; ++j < l;) {
				if (arr[j] === i + 1) {
					[arr[i], arr[j]] = [arr[j], arr[i]];
					++swaps;
					break;
				}
			}
		}
	}
	return swaps;
}