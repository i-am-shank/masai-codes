print(end=" ");
for i in range(1,4):
  print(end="*");
for i in range(1,4):
  print(end=" ");
for i in range(1,4):
  print(end="*");
print();
for i in range(1,6):
  print(end="*");
print(end=" ");
for i in range(1,6):
  print(end="*");
print();
for i in range(1, 6):
  for j in range(1, i+1):
    print(end=" ");
  for j in range((2*(5-i)) + 1):
    print(end="*");
  print();