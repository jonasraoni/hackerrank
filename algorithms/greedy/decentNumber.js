//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function decentNumber(p) {
	//Starts assuming that all digits are 5, then start adding 3s to the end until a good point is found
	for (let threes = -5; (threes += 5) <= p; )
		if (!((p - threes) % 3))
			return console.log(''.padEnd(p - threes, 5) + ''.padEnd(threes, 3));
	console.log(-1);
}