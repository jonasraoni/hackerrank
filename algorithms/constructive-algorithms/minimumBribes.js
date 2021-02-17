//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function minimumBribes(q) {
	let bribes = 0;
	for (let start = 0, l = q.length - 1;;) {
		//skip what's already sorted out
		while (q[start] === start + 1 && ++start < l);
		// if it's over, quit
		if (start === l) {
			console.log(bribes);
			return bribes;
		}
		// fix step-by-step (probably there's a math formula that can be applied here, the same way I defined a "chaotic" situation -_-)
		for (let i = start - 1; ++i < l;) {
			if (q[i] > q[i + 1]) {
				//if the distance is bigger than 2, it would require many bribes
				let distance = Math.abs(q[i] - i - 1);
				if (distance > 2) {
					console.log('Too chaotic');
					return 'Too chaotic';
				}
				[q[i], q[i + 1]] = [q[i + 1], q[i]];
				++bribes;
			}
		}
	}
}

function minimumBribes2(q) {
	let bribes = 0;
	for (let i = -1, l = q.length - 1; ++i < l;) {
		if (q[i] > i + 1 || q[i] > q[i + 1]) {
			let distance = Math.abs(q[i] - i - 1);
			if (distance > 2) {
				console.log('Too chaotic');
				return 'Too chaotic';
			}
			bribes += distance;
		}
	}
	console.log(bribes);
	return bribes;
}