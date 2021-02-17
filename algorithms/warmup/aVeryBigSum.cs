//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static long aVeryBigSum(int n, long[] ar) {
		long r = 0;
		foreach(var v in ar)
		r += v;
		return r;
	}
}