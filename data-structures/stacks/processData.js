//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function processData(input) {
	const stack = [];
	for (const query of input.split('\n')) {
		const [operation, value] = query.split(' ').map(v => +v);
		switch (operation) {
			case 1:
				// As we're not using the stack value, we can keep the maximum at the moment, so it becomes easy to recover the past xD
				stack.push(Math.max(stack.length ? stack[stack.length - 1] : 0, value));
				break;
			case 2:
				stack.pop();
				break;
			case 3:
				console.log(stack.length ? stack[stack.length - 1] : 0);
				break;
		}
	}
}