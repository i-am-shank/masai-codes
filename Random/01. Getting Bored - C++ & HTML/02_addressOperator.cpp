#include <iostream>
using namespace std;

int main()
{
  int var1 = 4;
  //   int    -->   4 bytes   -->   (4 * 8) bits    -->   per bit  0 or 1
  //   11   -->   8 + 2 + 1  -->  (2^3) + (2^1) + (2^0)   -->   0 0 0 0 1 0 1 1
  //   8 bits   -->   1 1 1 1 1 1 1 1   -->   1 0 0 0 0 0 0 0 0   -   1  =  (2^8) - 1  =  ((2^4)  *  (2^4)) - 1  = (16 * 16) - 1 = 256 - 1
  //  =  255  (max. no. that can be stored in 8 bits of memory)

  //   8 bits   ->   (2^8) - 1   (max. +ve no.)
  //   16 bits   ->  (2^16) - 1
  //   integer (size)   =    4 bytes   =   32 bits   ->  (2^32) - 1
  //   max. +ve value stored in integer-datatype  (4 bytes  ..  32 bits)   =    ((2 ^ 32)  -  1)

  //   16 - 1  =  15
  //   (2^4)  -->  0 0 0 1 0 0 0 0
  //   15  =  8 + 4 + 2 + 1  =  (2^3) + (2^2) + (2^1) + (2^0)  =   0 0 0 0 1 1 1 1
  //   16  -  15
  //   0 0 0 1 0 0 0 0   -   1
  // = 0 0 0 0 1 1 1 1

  //   8 - 1  =  7
  //   8 = (2^3) = 0 0 0 0 1 0 0 0
  //   7 = (2^2) + (2^1) + (2^0) = 0 0 0 0 0 1 1 1
  // 0 0 0 0 1 0 0 0   -  1
  // 0 0 0 0 0 1 1 1

  bool var2 = true;
  char var3 = 'd';

  cout << "Value of var1 : " << var1 << "\n";
  cout << "Address of var1 : " << &var1 << "\n";
  //   &  -->  "address-of" operator
}

/*
g++   -->   C++ compiler

var1   -->   "0x 4a65bffa7c" (address)   -->    4
(Symbol table)

Address  -->  hexadecimal (16-base)
Binary  -->  2-base  (0, 1)
Decimal  -->  10-base (0 - 9)
Hexadecimal  -->  16-base (0 - 9, a, b, c, d, e, f)

Address  -->   "0x 4a65bffa7c"

*/