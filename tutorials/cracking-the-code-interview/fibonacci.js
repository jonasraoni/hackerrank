//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function fibonacci(n) {
	return Math.round(Math.pow((Math.sqrt(5) + 1) / 2, Math.abs(n)) / Math.sqrt(5)) * (n < 0 && n % 2 ? -1 : 1);
}

function fibonacci2(n) {
	if (n < 2)
		return n;
	let last = 1;
	for (let penultimate = 0, i = n - 1; i--;)
		last = penultimate + (penultimate = last);
	return last;
}