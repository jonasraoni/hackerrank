//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function reverseArray(a) {
	return a.reverse();
}

function reverseArray2(a) {
	for (let l = a.length, i = l >> 1; i--;)
		[a[i], a[l - i - 1]] = [a[l - i - 1], a[i]];
	return a;
}