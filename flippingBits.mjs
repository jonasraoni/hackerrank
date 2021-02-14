//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function flippingBits(N) {
	//Inverse the bits, then use the 32-bit shift to keep the number internally unsigned (JS underground)
	return ~N >>> 0;
}