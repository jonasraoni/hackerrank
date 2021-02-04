//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static void staircase(int n) {
		for (var i = -1; ++i < n;) {
			Console.WriteLine("".PadRight(i + 1, '#').PadLeft(n));
		}
	}
}