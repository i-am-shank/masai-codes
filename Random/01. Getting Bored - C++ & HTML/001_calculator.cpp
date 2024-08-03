#include <iostream>
using namespace std;

int sum(int n1, int n2)
{
  return (n1 + n2);
}

int diff(int n1, int n2)
{
  return (n1 - n2);
}

int multiply(int n1, int n2)
{
  return (n1 * n2);
}

int divide(int n1, int n2)
{
  return (n1 / n2);
}

// (a+b) + (a-b)  =  a + b + a - b  =  (2 * a)
// (a+b) - (a-b)  =  a + b - a + b  =  (2 * b)
// (36 * 18)  =  648
// (36 / 18)  =  2

int main()
{
  int operations;
  cin >> operations;
  for (int i = 0; i < operations; i++)
  {
    int a, b;
    cin >> a >> b;
    int type; //  1  -->  (a+b) + (a-b)  ,   2 -->  (a+b) - (a-b)  ,   3  -->  (a+b) * (a-b)   ,  4 --->  (a+b) / (a-b)
    cin >> type;
    int ans;
    if (type == 1)
    {
      ans = sum(sum(a, b), diff(a, b));
    }
    else if (type == 2)
    {
      ans = diff(sum(a, b), diff(a, b));
    }
    else if (type == 3)
    {
      ans = multiply(sum(a, b), diff(a, b));
    }
    else if (type == 4)
    {
      ans = divide(sum(a, b), diff(a, b));
    }
    else
    {
      continue;
    }
    cout << ans << "\n";
  }
}