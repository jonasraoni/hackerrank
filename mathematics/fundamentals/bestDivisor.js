//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function bestDivisor(n) {
	let bestSum = 0;
	let bestNumber = 0;
	for (let i = n + 1; --i; ) {
		// Look for a divisor
		if (!(n % i)) {
			// Lazy way to get the sum of digits (didn't want to go the Math way: "dividing by 10")
			const sum = [...`${i}`].reduce((t, v) => t += +v, 0);
			if (sum > bestSum) {
				bestSum = sum;
				bestNumber = i;
			}
			else if (sum === bestSum && i < bestNumber)
				bestNumber = i;
		}
	}
	return bestNumber;
}