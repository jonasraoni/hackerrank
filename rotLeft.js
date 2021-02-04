//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function rotLeft(a, p) {
	for (var l = a.length, p = (Math.abs(p) >= l && (p %= l), p < 0 && (p += l), p), i, x; p; p = (Math.ceil(l / p) - 1) * p - l + (l = p))
		for (i = l; i > p; x = a[--i], a[i] = a[i - p], a[i - p] = x);
	return a;
}