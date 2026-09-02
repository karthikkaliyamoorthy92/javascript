// Task 1 — Variables
// Create variables using var, let, and const.
// Name
// Age
// City
// College
// Requirements:
// •	Print all values.
// •	Change the var value.
// •	Change the let value.
// •	Try changing the const value.
// •	Try redeclaring each variable and observe what happens.

// var username = "Karthik";
// let age = 34;
// const city = "Perambalur";
// const college = "MBEC Engineering College";

// console.log("Name:", username);
// console.log("Age:", age);
// console.log("City:", city);
// console.log("College:", college);

// Changing var value
// username = "Arun";
// console.log("Updated Name:", username);

// Changing let value
// age = 35;
// console.log("Updated Age:", age);

// Trying to change const value (will throw an error)
// city = "Trichy"; // reassigning const value will cause an error

// Trying to redeclare variables
// var username = "Ravi"; // Redeclaring var is allowed
// let age = 36; // Redeclaring let will throw an error
// const city = "Chennai"; // Redeclaring const will throw an error

// console.log("Redeclared Name:", username);
// ________________________________________
// Task 2 — Printing Statements
// Use:
// console.log()
// alert()
// confirm()
// prompt()
// document.writeln()
// Create one example for each.

// let username = "Karthik";
// console.log("Hello, " + username + "!"); // console.log()

// alert("Welcome to the JavaScript tutorial!"); // alert()

// let userConfirmed = confirm("Are you eligible to attend this seminar?"); // confirm()
// console.log("User confirmed:", userConfirmed);

// let userInput = prompt("Please enter your favorite programming language:"); // prompt()
// console.log("User input:", userInput);

// document.writeln("<h1>JavaScript is fun!</h1>"); // document.writeln()  


// ________________________________________
// Task 3 — User Details
// Get from the user:
// Name
// Age
// City
// Qualification
// Print the details in the console.

// let username = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// let city = prompt("Enter your city:");
// let qualification = prompt("Enter your qualification:");

// console.log("User Details:");
// console.log("Name:", username);
// console.log("Age:", age);
// console.log("City:", city);
// console.log("Qualification:", qualification);
// ________________________________________
// Data Type Tasks
// Task 4 — Find Data Types
// Create variables containing:
// "JavaScript"
// 100
// 99.5
// true
// false
// undefined
// null
// Print their values and use typeof to identify their data types.

// let programmingLanguage = "JavaScript";
// let integerNumber = 100;
// let floatNumber = 99.5;
// let booleanValue = true;
// let booleanvalue2 = false;
// let emptyValue;
// let Value = null;

// console.log("Value:", programmingLanguage, "Type:", typeof programmingLanguage);
// console.log("Value:", integerNumber, "Type:", typeof integerNumber);
// console.log("Value:", floatNumber, "Type:", typeof floatNumber);
// console.log("Value:", booleanValue, "Type:", typeof booleanValue);
// console.log("Value:", booleanvalue2, "Type:", typeof booleanvalue2);
// console.log("Value:", emptyValue, "Type:", typeof emptyValue);
// console.log("Value:", Value, "Type:", typeof Value);

// ________________________________________
// Task 5 — Student Array
// Create an array containing:
// Student names
// Example:
// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// Print:
// 1.	First student
// 2.	Second student
// 3.	Last student
// 4.	Total students
// Use only:
// array[index]
// array.length

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

// let lastIndex = students.length - 1;

// console.log("First student:", students[0]);
// console.log("Second student:", students[1]);
// console.log("Last student:", students[lastIndex]);//console.log("Last student:", students[4]);
// console.log("Total students:", students.length);
// ________________________________________
// Task 6 — Employee Object
// Create an employee object containing:
// name
// age
// role
// skills
// isWorking
// qualification
// skills and qualification should be arrays.
// Print:
// •	Employee name
// •	Age
// •	Role
// •	First skill
// •	Last qualification
// •	Working status
// This follows the same array-inside-object structure from your notes.

// let emp = {
//     name:"Karthik",
//     age: 30,
//     role: "Developer",
//     skills: ["JavaScript", "Python", "SQL"],
//     isWorking: true,
//     qualification: ["B.Tech","PGDC", "MCA"]
// };

// console.log("Employee name:", emp.name);
// console.log("Age:", emp.age);
// console.log("Role:", emp.role);
// console.log("First skill:", emp.skills[0]);
// console.log("Last qualification:", emp.qualification[emp.qualification.length - 1]);
// console.log("Working status:", emp.isWorking);

// ________________________________________
// Arithmetic Operator Tasks
// Task 7 — Calculator
// Create:
// let a = 20;
// let b = 5;
// Calculate:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation

// let a = 20;
// let b = 5;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);

// ________________________________________
// Task 8 — Shopping Bill
// Create:
    // Shirt = 999
    // Pant = 1499
    // Shoes = 1999
    // Bag = 799
// Calculate:
// Total price
// Use arithmetic operators only.

// let Shirt = 999;
// let Pant = 1499;
// let Shoes = 1999;
// let Bag = 799;

// let totalPrice = Shirt + Pant + Shoes + Bag;

// console.log("Total price:", totalPrice);

// ________________________________________
// Task 9 — Increment & Decrement
// Find the output without running the code first.
// A
// let a = 10;

// let b = a++;

// console.log(a); //11
// console.log(b); //10
// B
// let a = 10;

// let b = ++a;

// console.log(a);//11
// console.log(b);//11
// C
// let a = 10;

// let b = a--;

// console.log(a);//9
// console.log(b);//10
// D
// let a = 10;

// let b = --a;

// console.log(a);//9
// console.log(b);//9
// ________________________________________
// Assignment Operator Tasks
// Task 10
// Start with:
// let num = 10;
// Perform separately:
// num += 5
// num -= 3
// num *= 2
// num /= 4
// num %= 3
// num **= 2
// Print the result after each operation.

// let num = 10;
//     num += 5;
//     console.log("Add Assignment += 5:", num); // 15

// let num = 10;
//     num -= 3;
// console.log("Subtract Assignment -= 3:", num); // 7

// let num = 10;
//     num *= 2;
// console.log("Multiply Assignment *= 2:", num); // 20

// let num = 10;
//     num /= 4;
// console.log("Divide Assignment /= 4:", num); // 2.5

// let num = 10;
//     num %= 3;
// console.log("Modulus Assignment %= 3:", num); // 1

// let num = 10;
//     num **= 2;
// console.log("Exponentiation Assignment **= 2:", num); // 100


// ________________________________________
// Comparison Operator Tasks
// Your notes cover <, >, <=, >=, ==, !=, ===, and !==.
// Task 11 — Find Output
// Predict the result:
// console.log(10 > 5); //true
// console.log(10 < 5); //false
// console.log(10 >= 10); //true
// console.log(10 <= 9); //false

// console.log(5 == "5"); //true
// console.log(5 === "5"); //false

// console.log(10 != "10"); //false
// console.log(10 !== "10");//true
// ________________________________________
// Logical Operator Tasks
// Task 12 — AND
// Find the output:
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false


// ________________________________________
// Task 13 — OR
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false
// ________________________________________
// Task 14 — NOT
// console.log(!true); //false
// console.log(!false); //true
// console.log(!(5 > 10)); //true
// console.log(!(10 > 5)); //false
// ________________________________________
// Task 15 — Combination
// Find the output without executing:
// console.log(5 == "5" && !(5 === 5) || 6 > 7); //false

// console.log(10 > 5 && 8 < 12 || 4 === "4"); //true

// console.log(7 === 7 && 10 != "10" || 5 >= 5); //true

// console.log(15 < 10 || 20 > 15 && 5 == "5");//true
// These follow the same comparison + logical style in your code.

// ________________________________________
// Ternary Operator Tasks
// Task 16 — Voting
// Create:
// let age = 20;
// Use the ternary operator:
// age >= 18 → "Eligible to vote"
// age < 18  → "Not eligible"

// let age = 20;
// let votingEligibility = age >= 18 ? "Eligible to vote" : "Not eligible";
// console.log(votingEligibility);

// ________________________________________
// Task 17 — Password
// Create:
// let password = true;
// Use ternary:
// true  → "Login successful"
// false → "Wrong password"

// let password = true;
// let loginMessage = password ? "Login successful" : "Wrong password";
// console.log(loginMessage);

// ________________________________________
// Concatenation & Template String
// Task 18 — User Introduction
// Create:
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// Print:
// My name is Naveen. I am 25 years old. I live in Trichy.
// Do it two ways:
// 1.	Using +
// 2.	Using template literals `${}`
// Your notes cover both approaches.

// let name = "Naveen";
// let age = 25;
// let city = "Trichy";

// console.log("My name is "+name+". I am "+age+" years old. I live in "+city);

// console.log(`My name is ${name}. I am ${age} years old. I live in ${city}.`);
// ________________________________________
// Type Casting Tasks
// Task 19 — String Conversion
// Use String() to convert:
// 100
// true
// undefined
// null
// [1, 2]
// Print the result and its typeof.
// let num = String(100);
// let bool = String(true);
// let undef = String(undefined);
// let nullValue = String(null);
// let arr = String([1, 2]);

// console.log(String(num), "Type :" + typeof String(num)); // "100" "string"
// console.log(String(bool), "Type :" + typeof String(bool)); // "true" "string"
// console.log(String(undef), "Type :" + typeof String(undef)); // "undefined" "string"
// console.log(String(nullValue), "Type :" + typeof String(nullValue)); // "null" "string"
// console.log(String(arr), "Type :" + typeof String(arr)); // "1,2" "string"

// ________________________________________
// Task 20 — Number Conversion
// Predict the output:
// console.log(Number());//0
// console.log(Number(""));//0
// console.log(Number("123"));//123 -number
// console.log(Number("a1"));//Nan
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Number(undefined));//Nan
// console.log(Number(null));//0
// Your notes specifically cover these conversions.


// ________________________________________
// Task 21 — Boolean Conversion
// Predict:
// console.log(Boolean());//false
// console.log(Boolean(""));//false
// console.log(Boolean("hello"));//true
// console.log(Boolean(123));//true
// console.log(Boolean(true));//true
// console.log(Boolean(false));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(null));//false
// console.log(Boolean([]));//true
// console.log(Boolean({}));//true
// ________________________________________
// Flow Control Tasks
// Task 22 — Voting Eligibility
// Get age using prompt().
// 18 or above → "You can vote"
// Below 18   → "You can't vote"
// Use:
// if
// else

    // let age = prompt("Enter your age:");
    // if(age >= 18){
    //     console.log("You can vote");
    //     //alert("You can vote");
    // } else {
    //     console.log("You can't vote");
    //     //alert("You can't vote");
    // }

   
// ________________________________________
// Task 23 — Positive or Negative
// Get a number from the user.
// Check:
// Positive
// Negative
// Zero
// Use if / else if / else.

// let number = prompt("Enter a number:");
// if (number > 0) {
//     console.log("The number is Positive.");
// } else if (number < 0) {
//     console.log("The number is Negative.");
// } else {
//     console.log("The number is Zero.");
// }

// ________________________________________
// Task 24 — Grade System
// Get marks from the user.
// Create:
// 90–100 → A Grade
// 80–89  → B Grade
// 70–79  → C Grade
// 60–69  → D Grade
// Below 60 → Fail
// Use if / else if / else.

// let marks = prompt("Enter your marks:");

// if (marks >= 90 && marks <= 100) {
//     console.log("A Grade");
// } else if (marks >= 80 && marks < 90) {
//     console.log("B Grade");
// } else if (marks >= 70 && marks < 80) {
//     console.log("C Grade");
// } else if (marks >= 60 && marks < 70) {
//     console.log("D Grade");
// } else if (marks < 60) {
//     console.log("Fail");
// } else {
//     console.log("Invalid marks entered.");//100 above
// }

// ________________________________________
// Nested If Task
// Task 25 — Job Eligibility
// Get:
// Age
// Height
// Weight
// Rules:
// Age >= 18
// Height >= 160
// Weight >= 60
// If all conditions are satisfied:
// "Congratulations! You are selected"
// Otherwise display the appropriate reason.
// This is based directly on the nested-if structure in your code.

// let age = prompt("Enter your age:");
// let height = prompt("Enter your height (in cm):");
// let weight = prompt("Enter your weight (in kg):");

// if (age >= 18) {
//     if (height >= 160) {
//         if (weight >= 60) {
//             console.log("Congratulations! You are selected.");
//             alert("Congratulations! You are selected.");
//         } else {
//             console.log("You are not eligible due to weight.");
//             alert("You are not eligible due to weight.");
//         }
//     } else {
//         console.log("You are not eligible due to height.");
//         alert("You are not eligible due to height.");
//     }
// } else {
//     console.log("You are not eligible due to age.");
//     alert("You are not eligible due to age.");
// }
// ________________________________________
// Switch Tasks
// Task 26 — Traffic Light
// Get a traffic light color:
// red
// yellow
// green
// Use switch.
// red    → Stop
// yellow → Ready
// green  → Go

// let trafficLight = prompt("Enter the traffic light color (red, yellow, green):").toLowerCase();

// switch (trafficLight) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid color entered.");
// }

// ________________________________________
// Task 27 — Day
// Create:
// let day = 1;
// Use switch:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Add:
// default → Invalid day

// let day = 1;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// ________________________________________
// FINAL MINI PROJECT
// Task 28 — Student Result System
// Create a small Student Result System using everything you've learned.
// Step 1 — Get user details
// Name
// Age
// City
// Step 2 — Get marks
// Tamil
// English
// Maths
// Step 3 — Calculate
// Total
// Average
// Step 4 — Check result
// Use if / else if / else:
// 90+ → A
// 80+ → B
// 70+ → C
// 60+ → D
// Below 60 → Fail
// Step 5 — Check voting
// Age >= 18
// Step 6 — Display
// Use a template string:
// Name: Naveen
// Age: 22
// City: Trichy
// Total: 250
// Average: 83.33
// Grade: B
// Voting: Eligible

// let name = prompt("Enter your name:");
// let age = parseInt(prompt("Enter your age:"));
// let city = prompt("Enter your city:");

// let tamilMarks = parseFloat(prompt("Enter Tamil marks:"));
// let englishMarks = parseFloat(prompt("Enter English marks:"));
// let mathsMarks = parseFloat(prompt("Enter Maths marks:"));

// let totalMarks = tamilMarks + englishMarks + mathsMarks;
// let averageMarks = totalMarks / 3;

// let grade;
// if (averageMarks >= 90) {
//     grade = "A";
// } else if (averageMarks >= 80) {
//     grade = "B";
// } else if (averageMarks >= 70) {
//     grade = "C";
// } else if (averageMarks >= 60) {
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// let votingEligibility = age >= 18 ? "Eligible" : "Not Eligible";

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`City: ${city}`);
// console.log(`Total: ${totalMarks}`);
// console.log(`Average: ${averageMarks.toFixed(2)}`);
// console.log(`Grade: ${grade}`);
// console.log(`Voting: ${votingEligibility}`);

// document.writeln(`<h2>Student Result</h2>`);
// document.writeln(`<p>Name: ${name}</p>`);
// document.writeln(`<p>Age: ${age}</p>`);
// document.writeln(`<p>City: ${city}</p>`);
// document.writeln(`<p>Total: ${totalMarks}</p>`);
// document.writeln(`<p>Average: ${averageMarks.toFixed(2)}</p>`);
// document.writeln(`<p>Grade: ${grade}</p>`);
// document.writeln(`<p>Voting: ${votingEligibility}</p>`);


