//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function restaurant(l, b) {
	const gcd = function(...o){
		let l = o.length;
		if(!l)
			return 0;
		let max = o[l - 1];
		for (let i = l - 1; i--; )
			for (let n = o[i], r; r = n % (n = max); max = r);
		return max;
	};
	// In order to divide something in equal pieces, both the width and the length should be divisible by the same number, as we need the biggest, there's the greatest common divisor
	const maxDivisor = gcd(l, b);
	return (l / maxDivisor) * (b / maxDivisor);
}