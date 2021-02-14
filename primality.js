//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function primality(n) {
	// Even numbers above 2 aren't primes
	if ((!(n & 1) && n > 2) || n < 2)
		return 'Not prime';
	// Reducing the number of checks
	const end = Math.sqrt(n) >> 0;
	for (let i = 1; ++i <= end; )
		if (!(n % i))
			return 'Not prime';
	return 'Prime';
}