//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function insertNodeAtPosition(head, data, position) {
	const node = new SinglyLinkedListNode(data);
	if (!position) {
		node.next = head;
		return node;
	}
	let current = head;
	while (--position)
		current = current.next;
	node.next = current.next;
	current.next = node;
	return head;
}