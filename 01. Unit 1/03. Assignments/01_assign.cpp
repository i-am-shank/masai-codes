// 2 4 5  --> 5
// 2 4 4  --> 4
// 2 2 2  --> 2 .. edge case

#include <iostream>
using namespace std;

int main() {
	int a, b, c;
	cin >> a >> b >> c;
	int maxNum = a;
	if(maxNum < b) {
		maxNum = b;
	}
	if(maxNum < c) {
		maxNum = c;
	}
	cout << maxNum << "\n";
	return 0;
}