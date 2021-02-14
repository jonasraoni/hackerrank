//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function lca(root, v1, v2) {
	while (true) {
		// If both numbers are bigger/smaller, we can choose a branch
		const useLeft = v1 < root.data;
		if (v1 === root.data || v2 === root.data || useLeft != v2 < root.data)
			break;
		root = useLeft ? root.left : root.right;
	}
	return root;
}