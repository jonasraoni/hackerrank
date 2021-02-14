//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function compare(a, b) {
	return b.score - a.score || (a.name === b.name ? 0 : a.name > b.name ? 1 : -1);
}