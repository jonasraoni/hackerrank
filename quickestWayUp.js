//+ Jonas Raoni Soares Silva
//@ http://raoni.org

class Solver {
	constructor(width, height) {
		this.length = width * height;
		this.board = new Array(this.length);
	}
	addWarp(start, end) {
		this.board[+start] = +end;
	}
	solve() {
		for (let current = [1], next = [], depth = 1; current.length; ++depth) {
			for (let node;
				(node = current.pop()) !== undefined;) {
				for (let i = node, l = Math.min(this.length, i + 6); i++ < l;) {
					const child = this.board[i] || i;
					if (child === this.length)
						return depth;
					if (!~child)
						continue;
					next.push(child);
					this.board[i] = -1;
				}
			}
			[current, next] = [next, current];
		}
		return -1;
	}
}

function quickestWayUp(ladders, snakes) {
	const s = new Solver(10, 10);
	ladders.forEach(o => s.addWarp(o[0], o[1]));
	snakes.forEach(o => s.addWarp(o[0], o[1], true));
	const r = s.solve();
	return r ? r : -1;
}