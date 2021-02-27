//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function minTime(machines, goal) {
	machines.sort((a, b) => a - b);

	// Start with a high value, just to keep the loop running
	let minDays = machines[0] + 1;
	for (let i = -1, dailyProduction = 0; ++i < machines.length && minDays > machines[i];) {
		// If the amount of days is enough to cover the production of the machine, merge its daily production...
		dailyProduction += 1 / machines[i];
		minDays = goal / dailyProduction;
	}
	// Here min days should be a good approximation (not needed at all for the code below, but I've decided to leave it here...)
	minDays = BigInt(Math.floor(minDays));

	// As I couldn't come up with a Math solution, just brute force remained.
	machines = machines.map(v => BigInt(v));
	let neededDays = BigInt(0);
	for (let maxDays = BigInt(machines[0]) * BigInt(goal); minDays < maxDays; ) {
		let mid = (minDays + maxDays) / BigInt(2);
		let units = BigInt(0);
		for (const machine of machines)
			units += mid / machine;
		if (units < goal)
			minDays = mid + BigInt(1);
		else
			neededDays = maxDays = mid;
	}
	return neededDays;
}