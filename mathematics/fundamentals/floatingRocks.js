//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function floatingRocks(x1, y1, x2, y2) {
	const gcd = function(...o){
		let l = o.length;
		if(!l)
			return 0;
		let max = o[l - 1];
		for (let i = l - 1; i--; )
			for (let n = o[i], r; r = n % (n = max); max = r);
		return max;
	};
	// Here I even didn't try to go with my naive solution as it was clear it would fail haha
	// After some observations (measuring how the integer intersections progresses), I perceived there was a common factor (if this should be clear on first sight, it means that my Math skills are still in baby level ;_;)
	const x = Math.abs(x1 - x2);
	const y = Math.abs(y1 - y2);
	const factor = gcd(x, y);
	// In case the height (or width) is 0, but not both...
	return (factor ? factor : Math.max(x, y, 1)) - 1;
}