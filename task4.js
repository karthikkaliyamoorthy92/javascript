// Task 1 — For Loop
// Print numbers from 1 to 10 using a for loop.
// Expected:
// 1
// 2
// 3
// ...
// 10

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// ________________________________________
// Task 2 — Reverse Number
// Print numbers from 10 to 1 using a for loop.

// for(let i=10;i>=1;i--){
//     console.log(i);

// }

// ________________________________________
// Task 3 — Even Numbers
// Print all even numbers from 1 to 20.
// 2
// 4
// 6
// 8
// ...
// 20

// for(let n=1;n<=20;n++){
//     if(n%2==0){
//         console.log(n);
//     }
// }

// ________________________________________
// Task 4 — Odd Numbers
// Print all odd numbers from 1 to 20.

// for(let n=1;n<=20;n++){
//     if(n%2==1){
//         console.log(n);
//     }
// }

// ________________________________________
// Task 5 — Multiplication Table
// Get a number from the user.
// Print its multiplication table from 1 to 10.
// Example:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50

// let num = prompt("Enter the number")

// console.log("Multiplication Table")

// for(let i=1;i<=10;i++){
//     console.log(`${num} X ${i} = ${num*i}`)
// }

// ________________________________________
// While Loop
// Task 6 — Countdown
// Using while, print:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// let a = 10;

// while(a>0){
//     console.log(a);
//     a--;
// }

// ________________________________________
// Task 7 — Sum of Numbers
// Using while, calculate:
// 1 + 2 + 3 + ... + 10
// Expected:
// 55

// let a=1;

// let sum=0;

// while(sum<55){
//     sum+=a;
//     // console.log(sum);
// }

// console.log(sum);
// ________________________________________
// Do While
// Task 8 — Print Numbers
// Use do...while to print:
// 1
// 2
// 3
// 4
// 5

//  let a=1;

// do{
//    console.log(a);
//    a++;

// }while(a<=5);
// ________________________________________
// Task 9 — Do While Understanding
// What is the output?
// let a = 10;

// do {
//     console.log(a);
//     a++;
// } while (a <= 5);
// Important: Explain why the output occurs even though the condition is false.

// do while first execution the statemnet then only will check the while CSSConditionRule,a =10 there inside the do we mentioned to print the statement then a increment later only we checking the condition there  a<=5 it is not lesser than or equal to 5 so it will execute only one
// ________________________________________
// For...of
// Your notes use for...of with strings and arrays.
// Task 10 — String Characters
// let name = "javascript";
// Print every character using for...of.

// let name = "javascript"

// for(let ch of name){
//     console.log(ch);
// }
// ________________________________________
// Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// Use for...of to print every fruit.

// let fruits = ["apple", "orange", "banana", "mango", "grapes"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

// ________________________________________
// Task 12 — Student Names
// Create an array of 5 student names.
// Use for...of to print:
// Student: Arun
// Student: Priya
// ...

// let students = ["Arun","Vijay","Lalith","Kishore","Priya"];

// for(let student of students){
//     console.log("Student : ",student);
// }
// ________________________________________
// For...in
// Your notes use for...in for objects.
// Task 13 — Employee Object
// Create:
// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// Use for...in to print:
// name Arun
// age 25
// role Developer
// city Chennai

// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };

// for(let key in employee){
//     console.log(key,":",employee[key])
// }

// ________________________________________
// Task 14 — Product Object
// Create:
// productName
// price
// brand
// category
// stock
// Use for...in to print every key and value.
// let product = {
//     productName  : "Iphone15",
//     price : 55000,
//     brand : "Iphone",
//     category : "Mobile",
//     stock : "Include stock"
// }

// for(let key in product){
//     console.log(key,":",product[key]);
// }

// ________________________________________
// Functions
// Task 15 — Simple Function
// Create a function called welcome().
// It should print:
// Welcome to JavaScript
// Call the function 3 times.

// function welcome(){
//     console.log("Welcome to Javascript");
// }

// welcome();
// welcome();
// welcome();

// ________________________________________
// Task 16 — Function With Parameter
// Create:
// function greet(name) {
//     // code
// }
// Call:
// greet("Naveen");
// greet("Arun");
// greet("Priya");
// Expected:
// Hello Naveen
// Hello Arun
// Hello Priya

// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// greet("Naveen");
// greet("Arun");
// greet("Priya");
// ________________________________________
// Task 17 — Multiple Parameters
// Create a function:
// student(name, age, department)
// Print all three values.
// Call it with 3 different students.
// Your syllabus specifically covers parameters and arguments.

// function student(name, age, department){
//     console.log(`Name ${name}`);
//     console.log(`Age ${age}`);
//     console.log(`Department ${department}`);
//     console.log();
// }

// student("Sashtiika",16,"ECE");
// student("Sathish",17,"CSE");
// student("Dhanshikaa",18,"MECH");
// ________________________________________
// Return
// Task 18 — Addition Function
// Create:
// function add(a, b) {
//     // return result
// }
// Call:
// let result = add(10, 20);
// console.log(result);
// Expected:
// 30

// function add(a, b) {
//     let addition= a+b;
//     return addition;
// }

// let result = add(10, 20);
// console.log(result);
// ________________________________________
// Task 19 — Salary
// Create:
// function salary(amount) {
//     return amount;
// }
// Store the returned value in a variable and print it.

// function salary(amount) {
//     return amount;
// }

// let sal = salary(25000);

// console.log(sal);

// ________________________________________
// Task 20 — Bonus Calculator
// Create:
// function bonus(salary, bonusAmount)
// Return:
// salary + bonusAmount
// Example:
// Salary = 50000
// Bonus = 5000

// Total = 55000

// function bonus(salary, bonusAmount){
//     let amount = salary + bonusAmount;
//     return amount;
// }

// let amt = bonus(50000,5000);

// console.log(amt);

// ________________________________________
// Default Parameter
// Task 21
// Create:
// function employee(name, role = "Developer") {
//     // print name and role
// }
// Call:
// employee("Arun");
// employee("Priya", "Designer");
// Find the output.
// This follows the default-parameter concept in your notes.

// function employee(name, role = "Developer") {
//     console.log(`Name : ${name} - Role: ${role}`)
// }

// employee("Arun");
// employee("Priya", "Designer");


// ________________________________________
// Function Types
// Task 22 — Named Function
// Create a named function:
// function square(number) {
//     return number * number;
// }
// Call it with 5 different numbers.

// let value = function square(number) {
//     return number * number;
// }

// console.log(value(5));
// console.log(value(6));
// console.log(value(7));
// console.log(value(8));
// console.log(value(9));

// ________________________________________
// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
// let calculate = function(a, b) {
//     return a + b;
// };
// Call it and print the result.

// let calculate = function(a, b) {
//     return a + b;
// };

// console.log(calculate(10,5));


// ________________________________________
// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.
// let multiply = (a, b) => {
//     return a * b;
// };

// let multiply = (a, b) => {
//     return a * b;
// };

// console.log(multiply(5,3));

// ________________________________________
// Scope
// Task 25 — Predict the Output
// function test() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// test();
// Before running it, identify which values can be accessed.
// Your notes demonstrate var versus let/const inside a function and block.

// if block

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// All three are accessible because they are declared inside the same block where they are being used.

// After the if block

// console.log(a); // 10

// a is declared using var.

// var is function-scoped, so it is accessible throughout the test() function.

// But

// console.log(b);

// b was declared using let.

// let is block-scoped, so it exists only inside the if { } block.

// Therefore, this produces

// ReferenceError: b is not defined

// The same applies to

// console.log(c);

// because c is declared using const, which is also block-scoped.
// ________________________________________
// Hoisting
// Task 26 — Predict
// console.log(a);

// var a = 10;
// What happens?

// Because var declarations are hoisted to the top of their scope.

// JavaScript behaves approximately like this:

// var a;

// console.log(a); // undefined

// a = 10;
// ________________________________________
// Task 27
// Predict:
// console.log(b);

// let b = 20;

// let is hoisted, but unlike var, it is not initialized with undefined.

// The time between entering the scope and reaching:

// let b = 20;

// is called the Temporal Dead Zone (TDZ).

// b is hoisted but uninitialized

// console.log(b); //  ReferenceError

// let b = 20;     // b is initialized here
// ________________________________________
// Task 28
// Predict:
// console.log(c);

// const c = 30;
// Then explain the difference between the three.

// const is hoisted, but it is not initialized when the scope starts.

// const c = 30;

// c remains in the Temporal Dead Zone (TDZ).

// console.log(c); // TDZ

// const c = 30;

// var can be accessed before its declaration and gives undefined; let and const cannot be accessed before initialization.

// var   → hoisted + undefined
// let   → hoisted + TDZ
// const → hoisted + TDZ

// ________________________________________
// IIFE
// Task 29 — Self Invoking Function
// Create an IIFE that immediately prints:
// Welcome to JavaScript
// Then create another IIFE that accepts:
// product
// discount
// and prints the discount message.
// Your notes demonstrate an IIFE using product and discount parameters.

// (function () {
//     console.log("Welcome to JavaScript");
// })();

// (function (product, discount) {
//     let finalPrice = 1000 - (1000 * discount / 100);

//     console.log("Product: " + product);
//     console.log("Discount: " + discount + "%");
//     console.log("Final Price: ₹" + finalPrice);
// })("Mobile", 10);
// ________________________________________
// Callback / Higher-Order Function
// Task 30
// Create:
// function welcome() {
//     console.log("Welcome");
// }

// function execute(callback) {
//     callback();
// }

// execute(welcome);

// Understand which function is the callback and which function is the higher-order function.

//welcome is the callback function because it is passed as an argument to another function.

//execute() is the Higher-Order Function (HOF) because it accepts another function as an argument.
// ________________________________________
// Generator Function
// Task 31 — Cashback
// Create a generator:
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
// Create the generator object and print all values using for...of.
// This matches the generator approach in your syllabus.

// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// // Create generator object
// const result = cashback();

// // Print all values
// for (const value of result) {
//     console.log(value);
// }


// ________________________________________
// FINAL MINI PROJECT
// Task 32 — Employee Management Console
// Create a simple Employee Management System using only the concepts you've learned.
// Employee data
// Create an array containing employee objects:
// Name
// Age
// Department
// Role
// Salary
// Example:
// let employees = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 40000
//     },
//     {
//         name: "Priya",
//         age: 24,
//         department: "HR",
//         role: "HR Executive",
//         salary: 35000
//     }
// ];
// Requirements
// Use:
// 1. for...of
// Print every employee.
// 2. for...in
// Print each employee's keys and values.
// 3. Function
// Create a function to display employee information.
// 4. Function parameters
// Pass employee information to the function.
// 5. Return
// Create a function that returns an employee's salary.
// 6. Condition
// Check:
// Salary >= 40000
// 7. Arrow function
// Create an arrow function for another simple calculation.
// 8. Generator
// Create a generator that produces employee benefits:
// Medical Insurance
// Transport
// Food Allowance
// Bonus

// ==========================================
// TASK 32 - EMPLOYEE MANAGEMENT CONSOLE
// ==========================================

// 1. Employee Data

// let employees = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 40000
//     },
//     {
//         name: "Priya",
//         age: 24,
//         department: "HR",
//         role: "HR Executive",
//         salary: 35000
//     },
//     {
//         name: "Karthik",
//         age: 28,
//         department: "Finance",
//         role: "Accountant",
//         salary: 45000
//     }
// ];


// // ==========================================
// // 2. for...of
// // Print every employee
// // ==========================================

// console.log("===== ALL EMPLOYEES =====");

// for (const employee of employees) {

//     console.log("Name:", employee.name);
//     console.log("Age:", employee.age);
//     console.log("Department:", employee.department);
//     console.log("Role:", employee.role);
//     console.log("Salary:", employee.salary);
//     console.log("-------------------------");
// }


// // ==========================================
// // 3. for...in
// // Print employee keys and values
// // ==========================================

// console.log("\n===== EMPLOYEE KEYS AND VALUES =====");

// for (const employee of employees) {

//     for (const key in employee) {

//         console.log(key + ":", employee[key]);

//     }

//     console.log("-------------------------");
// }


// // ==========================================
// // 4. Function
// // Display employee information
// // ==========================================

// function displayEmployee(employee) {

//     console.log("\nEmployee Information");
//     console.log("Name:", employee.name);
//     console.log("Age:", employee.age);
//     console.log("Department:", employee.department);
//     console.log("Role:", employee.role);
//     console.log("Salary:", employee.salary);
// }


// // Calling the function

// console.log("\n===== FUNCTION EXAMPLE =====");

// displayEmployee(employees[0]);


// // ==========================================
// // 5. Function Parameters
// // Passing employee information
// // ==========================================

// function showEmployee(name, department, role) {

//     console.log("\nEmployee Details");
//     console.log("Name:", name);
//     console.log("Department:", department);
//     console.log("Role:", role);
// }

// showEmployee(
//     employees[1].name,
//     employees[1].department,
//     employees[1].role
// );


// // ==========================================
// // 6. Return
// // Function returns employee salary
// // ==========================================

// function getSalary(employee) {

//     return employee.salary;
// }

// let salary = getSalary(employees[0]);

// console.log("\n===== SALARY =====");
// console.log("Arun Salary:", salary);


// // ==========================================
// // 7. Condition
// // Check salary >= 40000
// // ==========================================

// console.log("\n===== SALARY CHECK =====");

// for (const employee of employees) {

//     if (employee.salary >= 40000) {

//         console.log(
//             employee.name + " has salary >= 40000"
//         );

//     } else {

//         console.log(
//             employee.name + " has salary < 40000"
//         );
//     }
// }


// // ==========================================
// // 8. Arrow Function
// // Calculate annual salary
// // ==========================================

// const annualSalary = (salary) => {

//     return salary * 12;

// };

// console.log("\n===== ANNUAL SALARY =====");

// console.log(
//     "Arun Annual Salary:",
//     annualSalary(employees[0].salary)
// );

// console.log(
//     "Priya Annual Salary:",
//     annualSalary(employees[1].salary)
// );


// // ==========================================
// // 9. Generator
// // Employee Benefits
// // ==========================================

// function* employeeBenefits() {

//     yield "Medical Insurance";
//     yield "Transport";
//     yield "Food Allowance";
//     yield "Bonus";

// }


// // Create generator object

// const benefits = employeeBenefits();

// console.log("\n===== EMPLOYEE BENEFITS =====");

// // Using for...of

// for (const benefit of benefits) {

//     console.log(benefit);

// }