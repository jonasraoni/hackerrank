//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function gameWithCells(n, m){
	const squares = (n >> 1) * (m >> 1);
	const conectors = Math.ceil((n * m - squares * 4) / 2);
	return squares + conectors;
}