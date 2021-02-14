//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function reverse(head) {
	do
		[head.prev, head.next] = [head.next, head.prev];
	while (head.prev && (head = head.prev));
	return head;
}