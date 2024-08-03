#include <iostream>
using namespace std;

/*
1. Complex code
2. Repetitive code logic
3. Chance of error / typing error / logical error might increase

*/

// f(x)  -->  ((x + 10) * 4)

// function  -->  write the repetitive block of code inside this, which is getting used multiple times in your code.

// function definition ----------------------

// 1. argument
// 2. return type
// 3. name

int shittyCalculation(int x)
{
  int ans = ((x + 10) * 4);
  return ans;
}

int main()
{
  int n;
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    int ele;
    cin >> ele;

    // int ans1 = ((ele + 10) * 4);
    // function calling ---------------------
    int ans1 = shittyCalculation(ele);
    // int ans2 = ((ans1 + 10) * 4);
    int ans2 = shittyCalculation(ans1);
    // int ans3 = ((ans2 + 10) * 4);
    int ans3 = shittyCalculation(ans2);
    // int ans4 = ((ans3 + 10) * 4);
    int ans4 = shittyCalculation(ans3);

    cout << ans4 << "\n";
  }
  return 0;
}