#include <iostream>
using namespace std;

/*

_ _ _ _ _ _

Arrays  -->  linearly memories assign
int arr[n]

arr[0]  -->   address (x)  -->  100  (100 101 102 103  -->  4 bytes)
arr[1]  -->   (x+4)
9, a, b, c, d, e, f
28  -->  29  -->  2a  -->  2b  -->  2c  (unit -> bytes)
2c  -->  2d  -->  2e  -->  2f  -->  30

Decimal   29 + 1  =  30

 (1)
  2 9
+   1
-------
  3 0


Hexadecimal
 (1)
  2 f
+   1
-------
  3 0
*/

//  main - function  -->   "function"
int main()
{
  // int n;
  // cin >> n;
  // int arr1[n];
  // for (int i = 0; i < n; i++)
  // {
  //   cin >> arr1[i];
  // }
  // cout << "Index  ->  Values  ->  Address" << "\n";
  // for (int i = 0; i < n; i++)
  // {
  //   cout << i << "  ->  " << arr1[i] << "  ->  " << &arr1[i] << "\n";
  // }

  // d i s h a \0

  // ASCII
  /*
  'a'  -->  65  (1st char  -->  65 .. 64 + 1)
  'z'  -->  90  (26th char  -->  64 + 26 = 90)

  '0'  -->  48

  '\0'  -->  0
  */

  int m;
  cin >> m;
  char arr2[m];
  for (int i = 0; i < m; i++)
  {
    cin >> arr2[i];
  }
  cout << "Index  ->  Values  ->  Address  (character-array)" << "\n";
  for (int i = 0; i < m; i++)
  {
    cout << i << "  ->  " << arr2[i] << "  ->  " << &arr2[i] << "\n";
  }

  string str = "Shashank";
  cout << "str before : " << str << "\n";
  str[5] = '\0';
  cout << "str after : " << str << "\n";

  int x = 0;
  char ch = (char)(x); //  '\0'
  cout << x << " -> " << ch << "." << "\n";

  return 0;
}