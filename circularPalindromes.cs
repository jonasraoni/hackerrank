//+ Jonas Raoni Soares Silva
//@ http://raoni.org

//this solution isn't perfect yet xD

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static int[] circularPalindromes(string s) {
		var r = new int[s.Length];
		var c = new Queue < char > (s);
		for (int i = -1, l = c.Count; ++i < l;) {
			r[i] = maxPalindrome(c.ToArray());
			c.Enqueue(c.Dequeue());
		}
		return r;
	}

	static public int maxPalindrome(char[] o) {
		int l = o.Length, end = 0, max = 1;
		for (var i = -1; ++i < l;) {
			var j = i;
			while (++j < l)
				if (o[j] != o[i])
					break;
			end = j - 1;
			j = Math.Min(i, l - end - 1) + 1;
			int k = 0;
			while (++k < j) {
				if (o[i - k] != o[end + k])
					break;
			}
			max = Math.Max(max, end + 1 - i + (k - 1) * 2);
			i = end;
		}
		return max;
	}
}