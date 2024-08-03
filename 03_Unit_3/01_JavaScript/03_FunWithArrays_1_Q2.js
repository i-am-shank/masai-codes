// Problem 1 : Factorial Calculation
// ----> Write a function calculateFactorial that takes a positive integer as input and returns its factorial. Ensure that the function handles invalid inputs gracefully.
// Ex invocation : calculateFactorial(5)
// Expected output : 120

function calculateFactorial(n) {
    if (n <= 1) {
        return 1;
    }
    var ans = 1;
    for (var i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

console.log(calculateFactorial(5));

// Problem 2 : Prime Number Checker
// ----> Implement a function isPrime that takes a positive integer as input and returns true if the number is prime, and false otherwise.
// Example :
// isPrime(7)   -->   true
// isPrime(10)   -->   false

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

// Problem 3 : Longest Palindrome in Array
// ----> Write a function findLongestPalindrome that takes an array of strings as input and returns the longest palindrome string found in the array. If no palindrome is found, return an appropriate message.

// Example :
// var strings = ["level", "noon", "hello", "racecar", "JavaScript"]
// findLongestPalindrome(strings)   -->   "racecar"

function findLongestPalindrome(arr) {
    var n = arr.length;
    var found = false;
    var ans = "";
    for (var i = 0; i < n; i++) {
        var str = arr[i];
        var palindrome = true;
        var m = str.length;
        for (var j = 0; j < m / 2; j++) {
            // console.log(str[j], str[m - 1 - j]);
            if (str[j] !== str[m - 1 - j]) {
                palindrome = false;
                break;
            }
        }
        if (palindrome === true) {
            if (str.length > ans.length) {
                ans = str;
                found = true;
            }
        }
    }
    return ans;
}

var stringArr = ["level", "noon", "hello", "racecar", "JavaScript"];
console.log(findLongestPalindrome(stringArr));

// Problem 4 : Unique Characters Counter
// ----> Create a function countUniqueCharacters that takes a string as input and returns the count of unique characters present in the string. Ignore case sensitivity while counting.
// Example :
// countUniqueCharacters("Hello World");
// Expected output : 7 (H, e, l, o, W, r, d)

function countUniqueCharacters(str) {
    var n = str.length;
    str = str.toLowerCase();
    var check = new Map(); // for storing unique chars
    for (var i = 0; i < n; i++) {
        if (str[i] !== " " && check.get(str[i]) === undefined) {
            check.set(str[i], 1);
        } else if (str[i] !== " ") {
            check.set(str[i], check.get(str[i]) + 1);
        }
    }
    var count = check.size; // size is the count needed
    return count;
}

console.log(countUniqueCharacters("hello world"));
