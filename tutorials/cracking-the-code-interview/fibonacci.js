//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function fibonacci(n) {
	if (n < 2)
		return n;
	let last = 1;
	for (let penultimate = 0, i = n - 1; i--;)
		last = penultimate + (penultimate = last);
	return last;
}