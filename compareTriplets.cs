//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static int[] compareTriplets(int a0, int a1, int a2, int b0, int b1, int b2) {
		return new [] {
			(a0 > b0 ? 1 : 0) + (a1 > b1 ? 1 : 0) + (a2 > b2 ? 1 : 0),
			(a0 < b0 ? 1 : 0) + (a1 < b1 ? 1 : 0) + (a2 < b2 ? 1 : 0)
		};
	}
}