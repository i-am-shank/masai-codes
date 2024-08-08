const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// ####  Employee Information
// Define a function employeeInformation that takes an array of employee objects, "employees" as a parameter. Extract the name and department of the second employee in the array and assign them to variables "secondEmployeeName" and "secondEmployeeDepartment". Return an object with "secondEmployeeName" and "secondEmployeeDepartment".
/*
Example Invocation:

console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }
*/

function employeeInformation(employees) {
    if (employees.length < 2) {
        return null;
    }
    var employee = {
        secondEmployeeName: employees[1].name,
        secondEmployeeDepartment: employees[1].department,
    };
    return employee;
}

console.log(employeeInformation(employees));

// ####  Average Salary
// Define a function averageSalary that takes an array of employee objects, "employees", as a parameter. Calculate the average salary of all employees using destructuring and a for-of-loop. Return the average salary.
/*
Example Invocation:

console.log(averageSalary(employees)); // Output: 60000
*/

function averageSalary(employees) {
    var totalSalary = 0;
    var count = 0;
    for (employee of employees) {
        totalSalary += employee.salary;
        count++;
    }
    return totalSalary / count;
}

console.log(averageSalary(employees));

// ####  Third Employee Info
// Define a function thirdEmployeeInfo that takes an array of employee objects, "employees", as a parameter. Extract the name, age, and salary of the third employee and assign them to variables "thirdEmployeeName", "thirdEmployeeAge", and "thirdEmployeeSalary". Calculate a bonus of 10% on the salary. Return a string in the format
// "Employee: , Age: , Salary: , Bonus: ".
/*
Example Invocation:

console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
*/

function thirdEmployeeInfo(employees) {
    if (employees.length < 3) {
        return null;
    }
    var employee = {
        Employee: employees[2].name,
        Age: employees[2].age,
        Salary: employees[2].salary,
        Bonus: employees[2].salary * 0.1,
    };
    return employee;
}

console.log(thirdEmployeeInfo(employees));
