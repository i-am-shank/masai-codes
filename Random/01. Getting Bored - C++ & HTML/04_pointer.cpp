#include <iostream>
using namespace std;

/*
var1  -->  0x920 (stored at)  -->  27 (value)
p1  -->  0x755 (stored at)  -->  0x920 (value)
*/

// Pointer   -->  is also a type of variable.. which stores the address of any other variable.

// 0 - indexing  -->   arr[0]   ..  bits (binary representation of no.)

int main()
{
  int var1 = 27;   //  integer    ..    ( (2 ^ 31) - 1)
  int *p1 = &var1; //  pointer to integer

  long long int var2 = 9212341234231; // 8 bytes .. (64 - bits)  ..  ( (2 ^ 63)  -  1 )  .. > (10^18)
  long long int *p2 = &var2;

  // Syntax (of pointers)  -------------------------------------------------
  //   <variable-datatype>  var-name   =   var-value ;
  //   <variable-datatype> *  pointer-name   =   & var-name ;

  // int var2 = &var1;
  cout << typeid(var1).name() << " " << typeid(p1).name() << "\n";
  cout << var1 << " " << &var1 << " " << p1 << "\n";
  cout << &p1 << " " << (*p1) << "\n"; //  de-reference operator

  cout << var2 << " " << (*p2) << "\n";

  cout << sizeof(var1) << " " << sizeof(var2) << "\n";
  return 0;
}