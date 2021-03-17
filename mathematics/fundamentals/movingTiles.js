//+ Jonas Raoni Soares Silva
//@ http://raoni.org

// This one required me to remember/search about old school formulas, so the "easy" isn't so easy when you're lacking knowledge 😑
function movingTiles(l, s1, s2, queries) {
	const r = [];
	// Pythagoras formula, could be also Math.hypot(l, l);
	const cubeDiagonal = Math.sqrt(l ** 2 * 2);
	for (const query of queries) {
		// Considering it's a cube, we can reverse the area formula to get the length of its sides with Math.sqrt(query), and calculate the diagonal length of the intersection
		const diagonalIntersection = Math.sqrt(Math.sqrt(query) ** 2 * 2);
		// Considering the speed/time/distance formula: distance = time * speed
		// We need to find a value when: |distanceOfS1 - distanceOfS2| = cubeDiagonal - diagonalIntersection
		// After replacing some variables and moving things from one side to another, that's what I got:
		r.push(Math.abs((cubeDiagonal - diagonalIntersection) / (s2 - s1)));
	}
	return r;
}