//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function reverseGame(n, k) {
	// Just increasing the left limit and updating the imaginary index of the element, while k is inside the range
	for (let i = -1; ++i < n && (k = n - 1 - k + i) > i; );
	return k;
}