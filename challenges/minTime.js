//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function minTime(machines, goal) {
	const count = days => machines.reduce((t, c) => t += Math.floor(days / c), 0);
	const findMinimumDays = (goal) => {
		// Start with a high value, just to keep the loop running
		let minDays = machines[0] + 1;
		for (let i = -1, dailyProduction = 0; ++i < machines.length && minDays > machines[i];) {
			// If the amount of days is enough to cover the production of the machine, merge its daily production...
			dailyProduction += 1 / machines[i];
			minDays = goal / dailyProduction;
		}
		return Math.floor(minDays);
	};
	machines.sort((a, b) => a - b);
	// The minimum we got is just a very good approximation, it considers the machines are producing a small fraction daily
	let minDays = findMinimumDays(goal);
	// So we check how much would be really produced in those days
	let production = count(minDays);
	// And check how many days it would be needed to produce the missing items
	let maxDays = minDays + findMinimumDays(goal - production);
	let neededDays = minDays;
	// Now that we have the minimum and the max possible, we'll brute force the best amount of days
	while (maxDays > minDays) {
		const mid = Math.floor((maxDays + minDays) / 2);
		if (count(mid) >= goal)
			maxDays = mid;
		else
			minDays = neededDays = mid + 1;
	}
	return neededDays;
}