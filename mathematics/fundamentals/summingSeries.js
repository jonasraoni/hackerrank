//+ Jonas Raoni Soares Silva
//@ http://raoni.org

// My solution will fail without updating the "main()", I've replaced the `parseInt(readLine(), 10)` by `BigInt(readLine())` =]
function summingSeries(n) {
	return (BigInt(n) * BigInt(n)) % BigInt(10 ** 9 + 7);
}