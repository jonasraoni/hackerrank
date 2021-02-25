//+ Jonas Raoni Soares Silva
//@ http://raoni.org

// An in-place iterative merge sort algorithm, that simply counts the required switches
function countInversions(arr) {
	let
		inversions = 0,
		l = arr.length,
		buffer = new Array(l);
	for (let size = 1; size < l; size <<= 1) {
		for (let leftStart = 0; leftStart < l; leftStart += 2 * size) {
			let
				left = leftStart,
				right = Math.min(left + size, l),
				leftLimit = right,
				rightLimit = Math.min(right + size, l),
				i = left;
			while (left < leftLimit && right < rightLimit) {
				const useLeft = arr[left] <= arr[right];
				// Here we count the switches :D
				if (!useLeft)
					inversions += leftLimit - left;
				buffer[i++] = arr[useLeft ? left++ : right++];
			}
			for (; left < leftLimit; buffer[i++] = arr[left++]);
			for (; right < rightLimit; buffer[i++] = arr[right++]);
		}
		[arr, buffer] = [buffer, arr];
	}
	return inversions;
}