//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function maxSubsetSum(arr) {
	let sum = 0;
	// Head is the current best index
	// As we go walking through the array, we're keeping the sums saved, so it becomes easier to switch the path
	for (let previous = -1, head = -2, i = -1, l = arr.length; ++i < l; ) {
		const v = arr[i];
		// Skip non-positive numbers
		if (v < 1)
			continue;
		// If it's an adjacent item, add to the sum (also replace the number by the sum at this position)
		if (head + 1 != i)
			arr[i] = sum += v;
		else {
			// Does the previous adjacent item offer a bigger sum?
			const newSum = arr[i] += previous > -1 ? arr[previous] : 0;
			if (newSum <= sum) {
				// If not, just mark it as a valid adjacent item
				previous = i;
				continue;
			}
			sum = newSum;
		}
		// If we ended up here, the sum was updated, so we need to update our indexes
		previous = head;
		head = i;
	}
	return sum;
}