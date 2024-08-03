// ####  Object Factory Function  ####
// Q. Write a function objectFactory that takes a first name 'fname' and an age 'age' as parameters. The function should return an object with 'fname' as the key and 'age' as the value. Ensure that the age is coerced to a number before being assigned to the object.
// Ex. invocation : objectFactory("John", "25")
// Expected output : { John: 25 }
function objectFactor(fname, age) {
    var ans = {};
    ans[fname] = Number(age);
    return ans;
}

var ans = objectFactor("John", "25");
console.log(ans);

// ####  Grade Classifier Function  ####
// Q. Write a functino gradeClassifier that takes a student's score 'score' out of 100 as a parameter. The function should return a grade based on the score range. Include logical operators to handle exceptional cases such as invalid input or score exceeded 100.
// Ex. invocation : gradeClassifier(85)
// Expected output : "B"
function gradeClassifier(score) {
    if (score < 0 || score > 100) {
        return "Please enter a valid score, i.e. between 0 & 100.";
    }
    switch (true) {
        case score >= 90:
            return "A";
        case score >= 80:
            return "B";
        case score >= 60:
            return "C";
        case score >= 33:
            return "P";
        default:
            return "F";
    }
}

console.log(gradeClassifier(85));
console.log(gradeClassifier(97));
console.log(gradeClassifier(22));
console.log(gradeClassifier(77));
console.log(gradeClassifier(33));

// ####  String Manipulator Function  ####
// Q. Write a function stringManipulator that takes two strings 'str1' and 'str2' as parameters. The function should concatenate the strings if their lengths are equal; otherwise, it should append the shorter string to the end of the longer string. Ensure both inputs are strings and handle cases where either or both inputs are empty strings.
// Ex. invocation : stringManipulator("hello", "world")
// Expected output : "helloworld"
function stringManipulator(a, b) {
    if (a.length === b.length) {
        return a + b;
    } else if (a.length > b.length) {
        return a + b;
    } else {
        return b + a;
    }
}

console.log(stringManipulator("hello", "world"));
console.log(stringManipulator("hola", "world"));
console.log(stringManipulator("bienvenidos", "world"));
