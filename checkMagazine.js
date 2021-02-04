//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function checkMagazine(magazine, note) {
	const words = new Map();
	//adds and counts words to the map
	for (const word of magazine) {
		words.set(word, (words.get(word) || 0) + 1);
	}
	//use the words and check which one is over
	for (const word of note) {
		const count = words.get(word);
		if (!count) {
			console.log('No');
			return;
		}
		words.set(word, count - 1);
	}
	console.log('Yes');
}