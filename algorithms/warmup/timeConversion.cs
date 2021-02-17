//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static string timeConversion(string s) {
		var isAM = s.Substring(8, 2) == "AM";
		var h = int.Parse(s.Substring(0, 2));
		return (isAM ? (h > 11) ? 0 : h : h + (h > 11 ? 0 : 12)).ToString().PadLeft(2, '0') + s.Substring(2, 6);
	}
}