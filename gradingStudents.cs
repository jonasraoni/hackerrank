//+ Jonas Raoni Soares Silva
//@ http://raoni.org

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
	static int[] gradingStudents(int[] grades) {
		for (var i = -1; ++i < grades.Length;) {
			var g = grades[i];
			if (g > 37 && (g % 5) > 2)
				grades[i] += 5 - (g % 5);
		}
		return grades;
	}
}