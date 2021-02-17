//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function has_cycle(head) {
	for (const visited = new Set(); head;) {
		if (visited.has(head))
			return true;
		visited.add(head);
		head = head.next;
	}
	return false;
}