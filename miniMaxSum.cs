//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static void miniMaxSum(int[] arr) {
		ulong s = 0, min = ulong.MaxValue, max = ulong.MinValue;
		foreach(ulong n in arr) {
			s += n;
			if (n < min)
				min = n;
			if (n > max)
				max = n;
		}
		Console.WriteLine(string.Format("{0} {1}", s - max, s - min));
	}
}