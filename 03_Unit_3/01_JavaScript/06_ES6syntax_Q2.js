const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// ####  Destructuring for finding the highest salary.

// Highest Paid : Define a function highestPaid that takes an array of employee objects, "employees", as a parameter. Use destructuring to find the employee with the highest salary. Return the employee object with the highest salary.
/*
Example Invocation:

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

*/

function highestPaid(employees) {
    if (employees.length === 0) {
        return null;
    }
    var highestSalaryEmployee = employees.reduce((acc, curr) => {
        // assume that accumulator has highest-salary employee, till now
        if (curr.salary > acc.salary) {
            // return current-employee
            // will replace accumulator with it, for further comparisons
            return curr;
        } else {
            return acc;
        }
    });

    return highestSalaryEmployee;
}

console.log(highestPaid(employees));
console.log();

// ####  Destructuring for swapping values.
// Destructuring to Swap: Define a function desctructuringToSwap that takes an array of employees objects, "employees", as a parameter. Use destructuring to swap the values of the first and last employees in the array. Return the modified "employees" array.
/*
Example Invocation:

console.log(destructuringToSwap(employees)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]

*/

function destructuringToSwap(employees) {
    // separating last employee out
    var lastEmployee = employees[employees.length - 1];
    var exceptLastEmployee = employees.slice(0, employees.length - 1);
    // separating first employee out
    var [first, ...midEmployees] = exceptLastEmployee;
    // Arrange ordering by spread-operator
    var updatedEmployees = [lastEmployee, ...midEmployees, first];
    return updatedEmployees;
}

console.log(destructuringToSwap(employees));
