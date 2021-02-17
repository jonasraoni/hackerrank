//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;

class Solution {
	static int simpleArraySum(int[] ar) {
		var s = 0;
		foreach(var i in ar)
		s += i;
		return s;
	}
}