//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static void plusMinus(int[] arr) {
		var totals = new [] {
			0,
			0,
			0
		};
		foreach(var n in arr)
			++totals[n > 0 ? 0 : n < 0 ? 1 : 2];
		double l = (double) arr.Length;
		foreach(var n in totals)
		Console.WriteLine(n / l);
	}
}