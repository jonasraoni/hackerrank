//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function divisors(n) {
	if (n & 1)
		return 0;
	let count = 0;
	// I remembered about this technique from extracting primes
	for (let i = (Math.sqrt(n) >>> 0) + 1; --i; )
		if (!(n % i))
			count += (~i & 1) + (~(n / i) & 1) - (i === n / i);
	return count;
}