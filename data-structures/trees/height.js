//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function height(root) {
	let height = 0;
	while ((root = root.right ? root.right : root.left))
		++height;
	return height;
}