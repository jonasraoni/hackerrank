//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function connectedCell(matrix) {
	const h = matrix.length,
		w = matrix[0].length;
	let max = 0;
	const find = (x, y) => {
		let count = 1;
		matrix[y][x] = 0;
		for (const stack = [
				[x, y]
			]; stack.length && ([x, y] = stack.pop());) {
			// Check the neighbors recursively
			for (let i = -1; ++i < 9;) {
				const xx = x + Math.floor(i / 3) - 1,
					yy = y + i % 3 - 1;
				// Skip center, out of bounds and not filled
				if (yy > -1 && yy < h && xx > -1 && xx < w && matrix[yy][xx]) {
					++count;
					matrix[yy][xx] = 0;
					stack.push([xx, yy]);
				}
			}
		}
		return count;
	};
	for (let y = h; y--;)
		for (let x = w; x--;)
			if (matrix[y][x])
				max = Math.max(max, find(x, y));
	return max;
}

function recursiveConnectedCell(matrix) {
	const h = matrix.length,
		w = matrix[0].length;
	let max = 0;
	const find = (x, y) => {
		// Return 0 if it's out of bounds or not filled
		if (y < 0 || y >= h || x < 0 || x >= w || !matrix[y][x])
			return 0;
		// Mark as "visited", so it won't be checked again
		matrix[y][x] = 0;
		let count = 1;
		// Check the neighbors recursively
		for (let i = -1; ++i < 9;)
			count += find(x + Math.floor(i / 3) - 1, y + i % 3 - 1);
		return count;
	};
	for (let y = h; y--;)
		for (let x = w; x--;)
			if (matrix[y][x])
				max = Math.max(max, find(x, y));
	return max;
}