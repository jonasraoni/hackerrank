//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function connectingTowns(n, routes) {
	let count = BigInt(routes[0]);
	for (let i = routes.length; --i; count *= BigInt(routes[i]));
	return count % 1234567n;
}