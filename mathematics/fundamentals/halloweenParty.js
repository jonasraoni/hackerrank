//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function halloweenParty(k) {
	const width = k >> 1;
	const height = width + (k & 1);
	return width * height;
}