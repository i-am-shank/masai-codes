h = int(input());
w = int(input());
for i in range(1, (h+1)):
  if (i%2) == 1:
    for j in range(1, (w+1)):
      print(end="[]  ");
  else:
    for j in range(1, (w+1)):
      print(end="  []");
  print();