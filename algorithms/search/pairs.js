//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function pairs(k, arr) {
	const binarySearch = (o, v, i) => {
		let h = o.length, l = -1, m;
		while(h - l > 1)
			if(o[m = h + l >> 1] < v) l = m;
			else h = m;
		return o[h] != v ? i ? h : -1 : h;
	};
	arr.sort((a, b) => a - b);
	let count = 0;
	for (let i = arr.length; --i; ) {
		// The number we need to have "k"
		const needed = arr[i] - k;
		// For high repetitive patterns, a modification in the binarySearch to retrieve the last index would be great here, so we could get the first + last
		for(let index = binarySearch(arr, needed); ++index && arr[index - 1] === needed; ++count);
	}
	return count;
}

// This solution was enough to pass the tests :D
function pairs2(k, arr) {
	arr.sort((a, b) => a - b);
	let count = 0;
	for (let i = arr.length; --i; ) {
		for (let j = i, found = false, diff; j-- && (diff = arr[i] - arr[j]) <= k; ) {
			if (diff === k) {
				++count;
				found = true;
			} else if (found)
				break;
		}
	}
	return count;
}