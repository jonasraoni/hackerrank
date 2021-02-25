//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function swapNodes(indexes, queries) {
	const inOrder = (node, track = []) => {
		if (node.left)
			inOrder(node.left, track);
		track.push(node.value);
		if (node.right)
			inOrder(node.right, track);
		return track;
	};

	const node = value => ({ value, left: null, right: null });
	const root = node(1);
	let nextLevel = [];
	let currentLevel = [root];
	let levels = [currentLevel];
	let i = 0;
	for (const [left, right] of indexes) {
		const parent = currentLevel[i++];
		if (left !== -1)
			nextLevel.push(parent.left = node(left));
		if (right !== -1)
			nextLevel.push(parent.right = node(right));
		if (i === currentLevel.length && nextLevel.length) {
			levels.push(currentLevel = nextLevel);
			nextLevel = [];
			i = 0;
		}
	}

	const r = [];
	for (const query of queries) {
		for (let i = query - 1; i < levels.length; i += query)
			for (const node of levels[i])
				[node.left, node.right] = [node.right, node.left];
		r.push(inOrder(root));
	}
	return r;
}