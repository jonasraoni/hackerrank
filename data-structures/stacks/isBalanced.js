//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function isBalanced(s) {
	const operators = '{}()[]';
	const stack = [];
	for (const c of s) {
		const index = operators.indexOf(c);
		// Always add
		if (!(index & 1))
			stack.push(index);
		// If it's a close, there should be a matching before...
		else if (!stack.length || stack.pop() !== index - 1)
			return 'NO';
	}
	// If there's garbage, fail...
	return stack.length ? 'NO' : 'YES';
}