// ####  Function with Variables  ####
// Q. Write a function subtract that takes two numbers as parameters and returns the result of subtracting the second number from the first number. Ensure that the function only performs subtraction if both parameters are numbers.
// Example : subtract(10, 5)
// Output : 5
function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 5));

// ####  Handling Null and Undefined  ####
// Q. Create a function greet that takes a first name, last name, and age as parameters. The function should return a greeting string mentioning the age of the person. Utilize template literals to compose the string. Include a conditional statement to handle cases where the age might not be available (i.e., undefined).
// Example : greet("John", "Doe", 30)
// Output : "John Doe's age is 30."
function greet(fname, lname, age) {
    if (age === undefined) {
        return `Hello ${fname} ${lname}.`;
    }
    return `${fname} ${lname}'s age is ${age}.`;
}

console.log(greet("Shashank", "Sinha", 25));
console.log(greet("Archa", "Yoinky"));

// ####  Utilizing Template Literals  ####
// Q. Write a function interpolate that takes two numbers as parameters and returns a string with the sum of the numbers formatted as an equation. Use logical operators to ensure that both inputs are numbers.
// Example : interpolate(5, 3)
// Output : "5 + 3 = 8"
function interpolate(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return `Please provide numbers as input.`;
    } else {
        return `${a} + ${b} = ${a + b}`;
    }
}

console.log(interpolate(5, 3));
console.log(interpolate(4, "9"));
