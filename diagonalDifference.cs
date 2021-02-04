//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static int diagonalDifference(int[][] a) {
		var v = 0;
		for (var i = -1; ++i < a.Length;)
			v += a[i][i] - a[i][a.Length - i - 1];
		return Math.Abs(v);
	}
}