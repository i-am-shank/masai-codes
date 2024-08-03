n = int(input());
for i in range(1, n):
  for j in range(1, (n-i)):
    print(end=" ");
  for j in range((2*(i-1))+1):
    print(end="*");
  print();
for i in range(1, n-1):
  print(end=" ");
print("|");