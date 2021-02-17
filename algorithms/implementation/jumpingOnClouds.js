//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function jumpingOnClouds(c) {
	let jumps = 0;
	//given the amount of steps and the promise that there's always a solution, we just need to try to jump 2, if it's not possible, just 1
	for (let i = c.length - 1;
		(i -= i >= 2 && !c[i - 2] ? 2 : 1) >= 0; ++jumps);
	return jumps;
}