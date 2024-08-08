// You are responsible for managing student enrollment and generating statistics for a school using multilevel destructuring and other JavaScript concepts.

// Use this school object data for problem no. 10, 11, 12, and 13.

// -------------------------------------------------

const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        {
            name: "Alice",
            className: "Grade 5",
            scores: { math: 95, science: 88, history: 85, english: 92 },
        },
        {
            name: "Bob",
            className: "Grade 4",
            scores: { math: 80, science: 78, history: 92, english: 85 },
        },
        {
            name: "Charlie",
            className: "Grade 5",
            scores: { math: 88, science: 90, history: 78, english: 88 },
        },
        {
            name: "Diana",
            className: "Grade 4",
            scores: { math: 92, science: 85, history: 88, english: 90 },
        },
    ],
};

// -------------------------------------------------

// ####  Problem 10 : countCalculation
// Extract the mathTeachersCount, historyTeachersCount, mathStudentsCount, and historyStudentsCount using multilevel destructuring.
// define a countCalculation function that takes input as   -->   school
// countCalculation returns an object with mathTeachersCount, historyTeachersCount, mathStudentsCount, and historyStudentsCount.
// Example :-
/*
console.log(countCalculation(school))
Output: {  
  mathTeachersCount: 5,
  historyTeachersCount: 3,
  mathStudentsCount: 150,
  historyStudentsCount: 100
}
*/
function countCalculation(school) {
    var mathTeachersCount = school.departments.math.teachers;
    var historyTeachersCount = school.departments.history.teachers;
    var mathStudentsCount = school.departments.math.students;
    var historyStudentsCount = school.departments.history.students;
    return {
        mathTeachersCount,
        historyTeachersCount,
        mathStudentsCount,
        historyStudentsCount,
    };
}

console.log(countCalculation(school));

// ####   Problem 11 : findTopStudent
// findTopStudent that takes a course name as a parameter and finds the student with the highest score in that course using multilevel desctructuring.
// define a findTopStudent function that takes input as
//     -->  school (Object)
//     -->  courseName (String)
// findTopStudent returns a string as {topstudent object}
// Example :-
/*
console.log( findTopStudent(school, 'math'))
{
  name: 'Alice',
  className: 'Grade 5',
  scores: { math: 95, science: 88, history: 85, english: 92 }
}
*/

function findTopStudent(school, course_name) {
    var students = school.students;
    students.sort((a, b) => {
        return b.scores[`${course_name}`] - a.scores[`${course_name}`];
    });
    return students[0];
}

console.log(findTopStudent(school, "math"));

// ####  Problem 12 : addNewDept
// Use the spread operator to add new departments for example art with teachers and students to the school's departments.
// define an addNewDept function that takes input as
//     -->  school (Object)
//     -->  newDepartment (Object)
// addNewDept returns a school object with an updated department.
// Example :-
/*
console.log(addNewDept(school,newDepartment))

Output = {
  name: 'XYZ School',
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
    art: { teachers: 2, students: 50 }
  },
  courses: [ 'math', 'science', 'history', 'english' ],
  students: [
    { name: 'Alice', className: 'Grade 5', scores: [Object] },
    { name: 'Bob', className: 'Grade 4', scores: [Object] },
    { name: 'Charlie', className: 'Grade 5', scores: [Object] },
    { name: 'Diana', className: 'Grade 4', scores: [Object] }
  ]
}
*/

var art = {
    teachers: 2,
    students: 50,
};

function addNewDept(school, new_dept) {
    var old_departments = school.departments;
    new_departments = { ...old_departments, art: new_dept };
    school.departments = new_departments;
    return school;
}

console.log(addNewDept(school, art));

// ####  Problem 13 : highestStudentCountDepartment
// highestStudentCountDepartment that returns the department (name) with the highest number of students.
// define a highestStudentCountDepartment function that takes input as
//     -->  school (Object)
// highestStudentCountDepartment returns a string as ${highest count dept}
// Example :-
/*
console.log(highestStudentCountDepartment(school));
Expected output : math
*/

function highestStudentCountDepartment(school) {
    var dept = school.departments;
    var dept_names = Object.keys(dept);
    dept_names.sort((a, b) => {
        return dept[`${b}`].students - dept[`${a}`].students;
    });
    // console.log("dept : ", dept);
    // console.log("dept_names : ", dept_names);
    return dept_names[0];
}

console.log(highestStudentCountDepartment(school));

// ####  Problem 14 : Greeting Message
// You are creating a JavaScript function to generate a personalized greeting message.
// Your task is to create a function generateGreeting that generates a greeting message for a given name and language.
// The function should have a default parameter for the language, which is set to English.
// Tasks :-
// -->  1. Define a function generateGreeting that takes parameters name and language (default parameter : "English").
// -->  2. Create an object greetings that contains greeting messages for different languages. Include at least English, Spanish, and French.
// -->  3. The function should return a formatted greeting message based on the provided name and language.
// Define a generateGreeting function that takes input as :
//    --> name
//    --> language (Default English)
// generateGreeting return string as follow
/*
console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
*/

function generateGreeting(name, language = "English") {
    var greetings = {
        English: `Hello, ${name}!`,
        Spanish: `¡Hola, ${name}!`,
        French: `Bonjour, ${name}!`,
    };
    return greetings[`${language}`];
}

console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
