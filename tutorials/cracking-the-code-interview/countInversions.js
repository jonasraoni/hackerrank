//+ Jonas Raoni Soares Silva
//@ http://raoni.org

// Currently failing at the heavy tests ;_;
// It's clear that I have to find a way to avoid updating the original array, but I need some free time to think about it

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