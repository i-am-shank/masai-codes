// ####  Array manipulation using spread operator
// Combining Arrays: Define a function combiningArrays that takes two arrays, "fruits" and "vegetables", as parameters. Create a new array "groceries" by combining both arrays using the spread operator. Return the "groceries" array.

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

function combiningArrays(fruits, vegetables) {
    var groceries = [...fruits, ...vegetables];
    return groceries;
}

console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
console.log("------------------------------");

// ----------------------------------------------

// ####  Object cloning using spread operator
// Cloning Objects: Define a function cloningObjects that takes an object "person" with properties "name", "age", and "address" as a parameter. Create a new object "personCopy" by cloning the "person" object using the spread operator. Return the "personCopy" object.

const person = { name: "John", age: 30, address: "123 Main St" };

function cloningObjects(person) {
    // cloned person-object
    var personCopy = { ...person };
    return personCopy;
}

//Example Invocation:
console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }
console.log("------------------------------");

// ----------------------------------------------

// ####  Object merging using spread operator
// Merging objects: Define a function mergingObjects that takes two objects, "student" and "course", as parameters. Create a new object "studentWithCourse" by merging the properties of both objects using the spread operator. Return the "studentWithCourse" object.

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

function mergingObjects(student, course) {
    var studentWithCourse = { ...student, ...course };
    return studentWithCourse;
}

//Example Invocation:

console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }
console.log("------------------------------");

// ----------------------------------------------

// ####  Nested array manipulation using spread operator
// Combining Nested Arrays: Define a function combiningNestedArrays that takes two arrays, "array1" and "array2", as parameters. Create a new array "combinedArray" by combining the nested arrays from "array1" and "array2" using the spread operator. Return the "combinedArray" array.

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
];

function combiningNestedArrays(array1, array2) {
    var combinedArray = [...array1, ...array2];
    return combinedArray;
}

//Example Invocation:

console.log(combiningNestedArrays(array1, array2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
