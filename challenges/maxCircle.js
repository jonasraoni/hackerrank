//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function maxCircle(queries) {
	const groups = new Map();
	const getGroup = element => {
		let group = groups.get(element);
		// Look for the head
		if (group && group.parent) {
			const groups = [];
			do {
				groups.push(group);
				group = group.parent;
			}
			while (group.parent);
			// Just creating a shortcut to the head group on demand...
			for (const g of groups)
				g.parent = group;
		}
		return group;
	}
	let max = 2;
	const r = [];
	for (const [a, b] of queries) {
		const groupA = getGroup(a);
		const groupB = getGroup(b);
		if (groupA && groupB) {
			// If both have groups and don't share the same head, choose A to be the leader (merge the counts), then update B to have A as its new head
			if (groupA !== groupB) {
				max = Math.max(groupA.count += groupB.count, max);
				groupB.parent = groupA;
				// Just a shortcut to the head
				groups.set(b, groupA);
			}
		} else if (groupA || groupB) {
			// If just one has a group, so just add increment the count at the head...
			const [group, element] = groupA ? [groupA, b] : [groupB, a];
			max = Math.max(++group.count, max);
			groups.set(element, group);
		}
		else {
			// Creates a group for each pair
			const group = { parent: null, count: 2 };
			groups.set(a, group);
			groups.set(b, group);
		}
		r.push(max);
	}
	return r;
}