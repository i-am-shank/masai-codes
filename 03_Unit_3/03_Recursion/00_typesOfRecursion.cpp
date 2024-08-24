#include <iostream>
using namespace std;

/*
5
1 2 3 4 5
idx  ->  0 1 2 3 4 5

1 ko print krenge bs to bssss      (2 3 4 5)

(2 3 4 5)    phir 1 ko print krenge


Ignore .. & trust recursion !! asli funda

   ..
(3 4 5)   phir 2 ko print krenge
   ..
(4 5)    phir 3 ko print krenge
   ..
(5)   phir 4 ko print krenge
..
()   phir 5 ko print krenge
*/

/*
1  (2 3 4 5)   1
*/

void printArray(int arr[], int n, int idx) {
	if(idx == n) {  // base case  (kahan pr rukna hai)
		return;
	}
	
	cout << arr[idx] << " ";  // aalsi wala kaam
	printArray(arr, n, idx+1);  // chhutti le lena.. dusron ko kaam dekr
	cout << arr[idx] << " ";  // aalsi wala kaam
	return;
}

int main() {
	int n;
	cin >> n;
	int arr[n];
	for(int i=0; i<n; i++) {
		cin >> arr[i];
	}
	printArray(arr, n, 0);
	return 0;
}