//+ Jonas Raoni Soares Silva
//@ http://raoni.org

function balancedSums(arr) {
	let sum = 0;
	// Accumulate while trying to keep the balance (left side increases, right side decreases)
	for(let i = 0, j = arr.length - 1; i < j; sum += Math.abs(sum + arr[i]) < Math.abs(sum - arr[j]) ? arr[i++] : -arr[j--]);
	return sum ? "NO" : "YES";
}