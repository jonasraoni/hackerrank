//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function strangeGrid(r, c) {
	// The rows are kind of grouped by two, their "base value" is changed every two rows (0, 10, 20, 30, ...), the "& ~1" is just a fancy way to round down to even
	const row = ((r - 1) & ~1) * 5;
	// The column value, when read from left to right, is increased by 2. And if the row is odd, the final value is increased by 1
	const col = (c - 1) * 2 + (~r & 1);
	return row + col;
}