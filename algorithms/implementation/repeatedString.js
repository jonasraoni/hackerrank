//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function repeatedString(s, n) {
	//get the occurrences of "a" in the string
	const occurrences = s.split('a').length - 1;
	//get the amount of strings that we can use completely, count the "a", then a small piece of the string might be needed, we'll slice it and count how many "a" it has
	return Math.floor(n / s.length) * occurrences + s.slice(0, n % s.length).split('a').length - 1;
}