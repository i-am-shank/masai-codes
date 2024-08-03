// 1 2 4 3 7  -->  7 1
// 1 1 1 1 1  -->  1 1
// 3  -->  3 3
// 1 1 1 2 2  -->  2 1
// 1 -3 4 -1 5  -->  5 -3

// integer -> 4 bytes
//   4 bytes = 32 bits (1 bit .. is sign bit)
//  (2^31 - 1) ..  31 bits  .. INT_MAX


#include <iostream>
#include <climits>
using namespace std;

// For each test case :-
// Time complexity : O(n)
// Space complexity : O(n)

int main() {
	int t;
	cin >> t;
	while(t--) {
		int size;
		cin >> size;
		int arr[size];
		for(int i=0; i<size; i++) {
			cin >> arr[i];
		}
		int maxEle=INT_MIN, minEle=INT_MAX;
		for(int i=0; i<size; i++) {
			if(maxEle < arr[i]) {
				maxEle = arr[i];
			}
			if(minEle > arr[i]) {
				minEle = arr[i];
			}
		}
		cout << maxEle << " " << minEle << "\n";
	}
	return 0;
}