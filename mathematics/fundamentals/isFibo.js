//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function isFibo(n) {
	// I would add some caching here, to continue from the biggest found, but it wasn't needed :D
	let last = 1;
	for (let penultimate = 0, i = 0; last < n;)
		last = penultimate + (penultimate = last);
	return last === n ? 'IsFibo' : 'IsNotFibo';
}