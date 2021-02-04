//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static int birthdayCakeCandles(int n, int[] ar) {
		int max = ar[0], count = 1;
		while (--n > 0) {
			if (ar[n] == max)
				++count;
			else if (ar[n] > max) {
				max = ar[n];
				count = 1;
			}
		}
		return count;
	}
}