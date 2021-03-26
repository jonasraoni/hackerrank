//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function sherlockAndGcd(a) {
	const gcd = function(...o){
		let l = o.length;
		if(!l)
			return 0;
		let max = o[l - 1];
		for (let i = l - 1; i--; )
			for (let n = o[i], r; r = n % (n = max); max = r);
		return max;
	};
	for (let i = a.length; i--; ) {
		// Check if it's 0 or 1 and abort
		if (a[i] < 2)
			return 'YES';
		const n = new Set([a[i]]);
		for (let j = i; --j >= 0; ) {
			// Skip processing when there's a duplicated element
			if (n.has(a[j]))
				break;
			n.add(a[j]);
			if (gcd(...n) < 2)
				return 'YES';
		}
	}
	return 'NO';
}