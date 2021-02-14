//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function findMergeNode(headA, headB) {
	const nodes = new Set();
	do
		nodes.add(headA);
	while (headA = headA.next);
	while (headB = headB.next) {
		if (nodes.has(headB))
			return headB.data;
	}
	return null;
}