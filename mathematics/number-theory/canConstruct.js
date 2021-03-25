//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function canConstruct(a) {
	// One rule that I could remember from childhood: a number is divisible by 3 if the sum of its digits is also divisible by 3 =]
	return a.reduce((t, c) => t += c) % 3 ? 'No' : 'Yes';
}