def findMinMax(arr) :
  minVal = 1e9;
  for ele in arr:
    if ele < minVal:
      minVal = ele;
  return minVal;

arr1 = input().split(" ");
arr2 = [int(ele) for ele in arr1];
ans = findMinMax(arr2);
print(ans);