// Task 1 — Student Result Analyzer
// Create a program that accepts a student's:
// •	Name 
// •	Department 
// •	5 subject marks 
// Requirements:
// •	Calculate total marks 
// •	Calculate average 
// •	Find pass/fail 
// •	Assign grade: 
// o	90+ → A 
// o	75–89 → B 
// o	60–74 → C 
// o	50–59 → D 
// o	Below 50 → Fail 
// •	Display the result using console.log() 
// Concepts: variables, arithmetic operators, if/else, functions.

// let student = {
//     name:"Karthik",
//     department:"CSE",
//     marks:[90, 85, 78, 92, 88]
// }

// let totalMarks = student.marks.reduce((acc,c,i,t)=> acc+c,0);

// console.log("Total Marks: ", totalMarks);

// let average = totalMarks/student.marks.length;

// console.log("Average Marks: ", average);

// if(average>=90){
//     console.log("Grade: A");
// } else if(average>=75){
//     console.log("Grade: B");
// } else if(average>=60){
//     console.log("Grade: C");
// } else if(average>=50){
//     console.log("Grade: D");
// } else {
//     console.log("Grade: Fail"); 
// }

// ________________________________________
// Task 2 — Employee Salary Calculator
// Create an employee object:
// {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// }
// Calculate:
// •	Basic salary 
// •	10% bonus if experience ≥ 2 
// •	15% bonus if experience ≥ 5 
// •	Final salary 
// Use a function:
// calculateSalary(employee)
// Concepts: objects, functions, conditions, arithmetic.

// let employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// }

// function calculateSalary(employee){
//     let finalSalary = employee.salary;
//     let basicSalary=0;
//     if(employee.experience >=2 ){
//         basicSalary = finalSalary - employee.salary * 0.10;
//     }else if(employee.experience >=5){
//         basicSalary = finalSalary - employee.salary * 0.15;
//     }
//     return basicSalary;

// }

// console.log(calculateSalary(employee));
// ________________________________________
// Task 3 — Product Filter System
// Create an array:
// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];
// Perform:
// 1.	Get products above ₹2,000 
// 2.	Get only electronics 
// 3.	Find the first product below ₹1,000 
// 4.	Calculate total price of all products 
// 5.	Check whether any product costs more than ₹50,000 
// 6.	Check whether every product has a price above ₹500 
// Concepts: filter(), find(), reduce(), some(), every().

// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];

// let productabove2000 = products.filter(product=> product.price>= 2000);
// console.log(productabove2000);

// let electronics = products.filter(product => product.category === "electronics");
// console.log(electronics);

// let firstProductBelow1000 = products.find(product => product.price < 1000);
// console.log(firstProductBelow1000);

// let totalPrice = products.reduce((acc, product) => acc + product.price, 0);
// console.log(totalPrice);

// let anyProductAbove50000 = products.some(product => product.price > 50000);
// console.log(anyProductAbove50000);

// let everyProductAbove500 = products.every(product => product.price > 500);
// console.log(everyProductAbove500);


// ________________________________________
// Task 4 — Employee Management
// Create an array of 6 employees.
// Each employee should have:
// {
//     id: 101,
//     name: "Kavin",
//     role: "Frontend Developer",
//     salary: 40000
// }
// Perform:
// •	Display all employee names 
// •	Display employees earning above ₹40,000 
// •	Find employee with ID 103 
// •	Calculate total salary 
// •	Find highest-paid employee 
// •	Sort employees from highest salary to lowest 
// •	Create a new array containing only employee names 
// Concepts: objects, arrays, map(), filter(), find(), reduce(), sort().

// let employee = [
//     { id: 101,name: "Kavin",role: "Frontend Developer",salary: 40000},
//     { id: 102,name: "Rajesh",role: "Backend Developer",salary: 45000},
//     { id: 103,name: "Suresh",role: "Fullstack Developer",salary: 50000},
//     { id: 104,name: "Kavitha",role: "DevOps Engineer",salary: 40000},
//     { id: 105,name: "Vimal",role: "Data Scientist",salary: 55000},
//     { id: 106,name: "Karthik",role: "QA Engineer",salary: 35000}
// ];

// console.log(employee.map(emp => emp.name));

// let employeeAbove40000 = employee.filter(emp => emp.salary > 40000);
// console.log(employeeAbove40000);

// let employeeWithID103 = employee.find(emp => emp.id === 103);
// console.log(employeeWithID103);

// let totalSalary = employee.reduce((acc, emp) => acc + emp.salary, 0);
// console.log(totalSalary);

// let highestPaidEmployee = employee.reduce((prev, current) => (prev.salary > current.salary) ? prev : current);
// console.log(highestPaidEmployee);

// let sortedEmployees = employee.sort((a, b) => b.salary - a.salary);
// console.log(sortedEmployees);

// let employeeNames = employee.map(emp => emp.name);
// console.log(employeeNames);


// ________________________________________
// Task 5 — Shopping Cart
// Create:
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];
// Calculate:
// Item total:
// price × quantity
// Then calculate:
// •	Total cart value 
// •	10% discount if total > ₹50,000 
// •	Final payable amount 
// Create a function:
// calculateCart(cart)
// Concepts: objects, functions, reduce(), conditions.

// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];

// function calculateCart(cart){
// let totalItems = cart.length;

// console.log("Total Items in Cart: ", totalItems);

// let totalQuantityPrice = cart.map(cart => cart.price * cart.quantity);
// console.log("Total Quantity Price: ", totalQuantityPrice);

// let totalCartValue = totalQuantityPrice.reduce((acc, price) => acc + price, 0);
// console.log("Total Cart Value: ", totalCartValue);

// let discount = 0;
// if (totalCartValue > 50000) {
//     discount = totalCartValue * 0.10;
// }
// console.log("Discount: ", discount);

// let finalPayableAmount = totalCartValue - discount;
// console.log("Final Payable Amount: ", finalPayableAmount);
// }

// calculateCart(cart);

// ________________________________________
// Task 6 — Student Search System
// Create an array of students:
// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];
// Requirements:
// 1.	Display all student names 
// 2.	Display students who scored above 80 
// 3.	Find student named "Priya" 
// 4.	Calculate average mark 
// 5.	Check whether anyone failed 
// 6.	Check whether everyone scored above 40 
// 7.	Sort students by marks 

// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];

// console.log(students.map(student => student.name));

// let studentsAbove80 = students.filter(student => student.mark > 80);
// console.log(studentsAbove80);

// let studentPriya = students.find(student => student.name === "Priya");
// console.log(studentPriya);

// let averageMark = students.reduce((acc, student) => acc + student.mark, 0) / students.length;
// console.log(averageMark);

// let anyoneFailed = students.some(student => student.mark < 40);
// console.log(anyoneFailed);

// let everyoneAbove40 = students.every(student => student.mark > 40);
// console.log(everyoneAbove40);

// let sortedStudentsByMarks = students.sort((a, b) => b.mark - a.mark);
// console.log(sortedStudentsByMarks);
// ________________________________________
// Task 7 — Array Transformation Challenge
// Given:
// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
// Perform:
// 1.	Create a new array containing numbers × 2 
// 2.	Get only even numbers 
// 3.	Get numbers greater than 15 
// 4.	Find the first number greater than 20 
// 5.	Find total of all numbers   
// 6.	Check whether any number is greater than 40 
// 7.	Check whether every number is positive 
// 8.	Sort from highest to lowest 
// Restriction: Use array higher-order methods wherever possible.

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// let doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// let numbersGreaterThan15 = numbers.filter(num => num > 15);
// console.log(numbersGreaterThan15);

// let firstNumberGreaterThan20 = numbers.find(num => num > 20);
// console.log(firstNumberGreaterThan20);

// let totalOfAllNumbers = numbers.reduce((acc, num) => acc + num, 0);
// console.log(totalOfAllNumbers); 

// let anyNumberGreaterThan40 = numbers.some(num => num > 40);
// console.log(anyNumberGreaterThan40);

// let everyNumberPositive = numbers.every(num => num > 0);
// console.log(everyNumberPositive);

// let sortedNumbersDescending = numbers.sort((a, b) => b - a);
// console.log(sortedNumbersDescending);

// ________________________________________
// Task 8 — String Analyzer
// Ask the user to enter a sentence.
// Example:
// "JavaScript is very powerful"
// Display:
// •	Total characters 
// •	Uppercase sentence 
// •	Lowercase sentence 
// •	Whether it contains "JavaScript" 
// •	First character 
// •	Last character 
// •	Number of words 
// •	Replace "JavaScript" with "Python" 
// •	Convert sentence into an array using split() 
// Concepts: length, includes(), slice(), toUpperCase(), toLowerCase(), replace(), split().

// let sentence = prompt("Enter a sentence:");

// console.log("Total Characters: ", sentence.length);
// console.log("Uppercase: ", sentence.toUpperCase());
// console.log("Lowercase: ", sentence.toLowerCase());
// console.log("Contains 'JavaScript': ", sentence.includes("JavaScript"));
// console.log("First Character: ", sentence.charAt(0));
// console.log("Last Character: ", sentence.charAt(sentence.length - 1));
// console.log("Number of Words: ", sentence.split(" ").length);
// console.log("Replace 'JavaScript' with 'Python': ", sentence.replace("JavaScript", "Python"));
// console.log("Sentence as Array: ", sentence.split(" "));    
// ________________________________________
// Final Mini Project — Employee Dashboard
// This would be a good intermediate-level class project.
// Create an Employee Dashboard using JavaScript.
// Data
// let employees = [
//     {
//         id: 101,
//         name: "Arun",
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },
//     {
//         id: 102,
//         name: "Priya",
//         department: "HR",
//         salary: 50000,
//         experience: 4
//     },
//     {
//         id: 103,
//         name: "Karthi",
//         department: "IT",
//         salary: 65000,
//         experience: 6
//     }
// ];
// Students must implement
// 1. Employee List
// •	Display all employees. 
// 2. Search
// •	Search employee by name. 
// 3. Department Filter
// •	Filter employees by department. 
// 4. Salary Filter
// •	Show employees earning more than ₹50,000. 
// 5. Salary Calculation
// •	Calculate total company salary. 
// 6. Highest Salary
// •	Find the highest-paid employee. 
// 7. Experience
// •	Find employees with more than 3 years' experience. 
// 8. Sorting
// •	Sort employees by salary: 
// o	Low → High 
// o	High → Low 
// 9. Statistics
// Display:
// Total Employees: 3
// Total Salary: ₹160000
// Highest Salary: ₹65000
// Average Salary: ₹53333

// let employees = [
//     {
//         id: 101,
//         name: "Arun",
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },
//     {
//         id: 102,
//         name: "Priya",
//         department: "HR",
//         salary: 50000,
//         experience: 4
//     },
//     {
//         id: 103,
//         name: "Karthi",
//         department: "IT",
//         salary: 65000,
//         experience: 6
//     }
// ];

// let employeeList = employees.map(emp => emp.name);
// console.log("Employee List: ", employeeList);

// let searchEmployee = employees.find(emp => emp.name === "Priya");
// console.log("Search Employee: ", searchEmployee);

// let departmentFilter = employees.filter(emp => emp.department === "IT");
// console.log("Department Filter: ", departmentFilter);

// let salaryFilter = employees.filter(emp => emp.salary > 50000);
// console.log("Salary Filter: ", salaryFilter);

// let totalCompanySalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
// console.log("Total Company Salary: ", totalCompanySalary);

// let highestPaidEmployee = employees.reduce((prev, current) => (prev.salary > current.salary) ? prev : current);
// console.log("Highest Paid Employee: ", highestPaidEmployee);

// let experienceFilter = employees.filter(emp => emp.experience > 3);
// console.log("Experience Filter: ", experienceFilter);

// let sortedBySalaryLowHigh = employees.sort((a, b) => a.salary - b.salary);
// console.log("Sorted by Salary Low → High: ", sortedBySalaryLowHigh);

// let sortedBySalaryHighLow = employees.sort((a, b) => b.salary - a.salary);
// console.log("Sorted by Salary High → Low: ", sortedBySalaryHighLow);

// let totalEmployees = employees.length;
// let averageSalary = totalCompanySalary / totalEmployees;

// console.log("Total Employees: ", totalEmployees);
// console.log("Total Salary: ", totalCompanySalary);
// console.log("Highest Salary: ", highestPaidEmployee.salary);
// console.log("Average Salary: ", averageSalary.toFixed(0));