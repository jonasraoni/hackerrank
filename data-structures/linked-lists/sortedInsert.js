//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function sortedInsert(head, data) {
	const node = new DoublyLinkedListNode(data);
	let current = head;
	while (current.data < data)
		if (current.next)
			current = current.next
	else {
		current.next = node;
		node.prev = current;
		return head;
	}
	node.next = current;
	if (!(node.prev = current.prev))
		return node;
	current.prev.next = node;
	return head;
}