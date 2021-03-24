//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function mostDistant(coordinates) {
	let [x, y] = coordinates[0];
	let top = y;
	let bottom = y;
	let left = x;
	let right = x;
	// Store the farthest point on each coordinate
	for (const [x, y] of coordinates) {
		left = Math.min(left, x);
		right = Math.max(right, x);
		top = Math.max(top, y);
		bottom = Math.min(bottom, y);
	}
	let max = 0;
	// Then check which extremities have the biggest distance against each other
	const extremes = [[left, 0], [right, 0], [0, top], [0, bottom]];
	for (let i = extremes.length; --i; )
		for (let j = i; j--; ) {
			const [x0, y0] = extremes[i];
			let [x, y] = extremes[j];
			max = Math.max(max, Math.sqrt((x -= x0) * x + (y -= y0) * y));
		}
	return max;
}