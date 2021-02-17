//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function commonChild(a, b) {
	// I've tried to come up with my own solution, basically:
	// - Removing elements that don't exist in both strings
	// - Mapping/indexing the places where I can find a given character
	// - Dynamically trying the combinations
	// - Skipping useless combinations (if there's not enough "characters" to cover the current "max")
	// But it failed to pass through the long tests, I gave up and adapted this algorithm https://en.wikipedia.org/wiki/Longest_common_subsequence_problem ;_;

	const size = a.length;
	const c = Array.from({ length: size + 1 }, () => new Array(size + 1));
	for (let i = size + 1; i--;)
		c[0][i] = c[i][0] = 0;
	for (let i = 0; ++i <= size;)
		for (let j = 0; ++j <= size;)
			c[i][j] = a[i - 1] === b[j - 1] ? c[i - 1][j - 1] + 1 : Math.max(c[i][j - 1], c[i - 1][j]);

	return function backtrack(x, y) {
		if (!x || !y)
			return 0;
		if (a[x - 1] === b[y - 1])
			return backtrack(x - 1, y - 1) + 1;
		if (c[x][y - 1] > c[x - 1][y])
			return backtrack(x, y - 1);
		return backtrack(x - 1, y);
	}(size, size);
}