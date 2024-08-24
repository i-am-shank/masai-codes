#include <iostream>
using namespace std;

int findSum(int arr[], int n, int idx) {
	// base case   -->   gadhe ko roko
	if(idx == n) {
		// []
		return 0;
	}

	// base case 2
	if(idx == (n-1)) {
		// [5]
		return arr[idx];
	}

	// pehle recursion ko kaam do    -->   apna time aayega
	int smallAns = findSum(arr, n, idx+1);
	int ans = (smallAns + arr[idx]);
	return ans;

	// kl krna aaj kro.. jo aaj wo abhi kro    -->   Aage ka kaam recursion ka
	// int ans = (arr[idx]);
	// int smallAns = findSum(arr, n, idx+1);
	// ans += smallAns;
	// return ans;
}

// 1 1 2 3 5 8
// fib(n) = fib(n-1) + fib(n-2)

int fib(int n) {
	if(n <= 1) {
		return 1;
	}
	return (fib(n-1) + fib(n-2));
}

int main () {
	// int n;
	// cin >> n;
	// int arr[n];
	// for(int i=0; i<n; i++) {
	// 	cin >> arr[i];
	// }
	// int ans = findSum(arr, n, 0);
	// cout << ans << "\n";

	int m;
	cin >> m;
	int ans = fib(m);
	cout << m << "\n";
	return 0;
}