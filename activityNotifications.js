//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function activityNotifications(expenditure, d) {
	const binarySearch = (o, v, i) => {
		let h = o.length, l = -1, m;
		while(h - l > 1)
			if(o[m = h + l >> 1] < v) l = m;
			else h = m;
		return o[h] != v ? i ? h : -1 : h;
	};
	const l = expenditure.length;
	if (l <= d)
		return 0;
	const middle = d >> 1;
	const isOdd = d & 1;
	let notifications = 0;
	// We're keeping an array to keep the unordered trailing list
	let trailing = expenditure.slice(0, d);
	// And a sorted trailing list which we'll update as needed instead of resorting what's already sorted
	let sorted = trailing.slice(0, d).sort((a, b) => a - b);
	for (let i = d - 1; ++i < l; ) {
		const limit = d < 2 ? trailing[0] * 2 : isOdd ? sorted[middle] * 2 : sorted[middle] + sorted[middle - 1];
		const expense = +expenditure[i];
		if (expense >= limit)
			++notifications;
		const remove = binarySearch(sorted, trailing.shift());
		const insert = Math.min(d, binarySearch(sorted, expense, true));
		const start = Math.min(remove, insert);
		const end = Math.max(remove, insert);
		// The loops below are an alternative to avoid mutating the array, which would be simpler =]
		//sorted.splice(remove, 1);
		//sorted.splice(insert, 0, expense);
		if (insert === end)
			for (let i = start - 1; ++i < end; sorted[i] = sorted[i + 1]);
		else
			for (let i = end + 1; --i > start; sorted[i] = sorted[i - 1]);
		sorted[insert] = expense;
		trailing.push(expense);
	}
	return notifications;
}