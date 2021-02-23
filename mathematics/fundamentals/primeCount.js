//+ Jonas Raoni Soares Silva
//@ http://raoni.org

// My solution will fail without updating the "main()", I've replaced the `parseInt(readLine(), 10)` by `BigInt(readLine())` =]
function primeCount(n) {
	if (n <= 1)
		return 0;
	let count = 1;
	// Generate and multiply each prime, to know what's the max factor that can be built with them within the given interval
	next:
	for (let current = 2n, i = 1; (i += 2) <= n; ) {
		// Reducing the number of checks
		const end = Math.sqrt(i) >> 0;
		for (let j = 1; ++j <= end; )
			if (!(i % j))
				continue next;
		if ((current *= BigInt(i)) > n)
			break;
		++count;
	}
	return count;
}