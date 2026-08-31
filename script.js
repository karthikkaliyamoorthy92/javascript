/*JavaScript Tasks

Task 1 — var, let, const

Create three variables:
•	var → student name
•	let → student age
•	const → college name

Requirements:
1.	Print all three values.
2.	Change the var value.
3.	Change the let value.
4.	Try changing the const value and observe the error.
5.	Try redeclaring the var variable.
6.	Try redeclaring the let variable and observe the error.*/

//1.Printing all three values
// var studentName ="Karthik";
// let studentAge = 21;
// const collegeName = "MBEC";

// console.log("Student Name : ",studentName);
// console.log("Student Age : ",studentAge);
// console.log("College Name : ",collegeName);

// //2.Changing the var value

// studentName ="Krish";
// console.log("Student Name : ",studentName);

// //changing the let value
//     studentAge = 22;
//     console.log("Student Age : ",studentAge);

// //Observing the error while changing the const value
// // collegeName = "Maha Barathi";
// // console.log("College Name : ",collegeName);

// //Redeclaring the var variable

// var studentName ="Krish";
// console.log("Student Name : ",studentName);

// //Observing the error while redeclaring the let variable
// let studentAge = 23;
// console.log("Student Age : ",studentAge);

/*
Task 2 — User Information
Get the following information from the user using prompt():
•	Name
•	Age
•	City
Print the result in the console.
Expected:
Name: Naveen
Age: 22
City: Trichy*/

// let userName = prompt("Enter your name")
// console.log("Name : ",userName)

// let userAge = prompt("Enter your age")
// console.log("Age : ",userAge)

// let userCity = prompt("Enter your city")
// console.log("City : ",userCity)


// /*
// Task 3 — Welcome Message
// Get the user's name using prompt().
// Display:
// Welcome Naveen!
// Use alert().*/

// let userName2 = prompt("Enter your name")
// alert("Welcome "+ userName2 +" !")

// /*
// Task 4 — Age Calculator
// Ask the user for their birth year.
// Calculate their approximate age using:
// Current Year - Birth Year
// Print the age in the console.
// Example:
// Birth Year: 2000
// Age: 26*/


// const currentYear = new Date().getFullYear();

// const birthYear = prompt("Enter your birth year");

// let age = currentYear - birthYear;

// console.log("Age : ",age);



/* Data Type Tasks
// Task 5 — Identify Data Types
// Create variables containing:
// "Hello"
// 100
// 25.5
// true
// false
// undefined
// null
// Use typeof and print each data type.*/

// let greet = "Hello";
// console.log(typeof(greet));

// let num=100;
// console.log(typeof(num));

// let decimalValue = 25.5
// console.log(typeof(decimalValue));

// let boo = true;
// console.log(typeof(boo));

// let boo2 = false
// console.log(typeof(boo2));

// let empty;
// console.log(typeof(empty));

// let value = prompt("Null Value Explanation")
// console.log(typeof(value));


 /* Task 6 — Student Data
// Create an object:
// name
// age
// city
// qualification
// isStudent
// Print:
// 1.	Complete object
// 2.	Name
// 3.	Age
// 4.	Qualification
// 5.	isStudent*/

// let std ={
//     name: "Krish",
//     age:17,
//     city:"Trichy",
//     qualification:"M.B.B.S",
//     isStudent:true,
// }

// console.log("Student : ",std);
// console.log("Student Name: ",std.name);
// console.log("Student Age: ",std.age);
// console.log("Student Qualification: ",std.qualification);
// console.log("Student isStudent: ",std.isStudent);

/* Task 7 — Fruit Array
// Create an array containing 6 fruits.
// Apple
// Mango
// Orange
// Banana
// Grapes
// Papaya
// Print:
// 1.	First fruit
// 2.	Second fruit
// 3.	Last fruit
// 4.	Total number of fruits
// Hint:
// array.length
// array.length - 1*/

// let fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];

// let totalFruit = fruits.length;

// let firstFruit = 0;

// let secondFruit = 1;

// let lastFruit = fruits.length-1;

// console.log("First fruit :",fruits[firstFruit]);

// console.log("Second fruit :",fruits[secondFruit]);

// console.log("Last fruit :",fruits[lastFruit]);

// console.log("Total number of fruits :",totalFruit);

/*Arithmetic Operator Tasks
// Task 8 — Basic Calculator
// Create two numbers:
// let a = 20;
// let b = 5;
// Perform:
// •	Addition
// •	Subtraction
// •	Multiplication
// •	Division
// •	Modulus
// •	Exponentiation
// Print every result separately.*/

// let a1 = 20;
// let b1 = 5;

// let addition = a1 + b1
// let subtraction = a1 - b1
// let multiplication = a1 * b1
// let division = a1 / b1
// let modulus = a1 % b1
// let exponentiation = a1 ** b1

// console.log("Addition : ",addition)
// console.log("Subtraction : ",subtraction)
// console.log("Multiplication : ",multiplication)
// console.log("Division : ",division)
// console.log("Modulus : ",modulus)
// console.log("Exponentiation : ",exponentiation)



 /* Task 9 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Calculate the total price.
// Expected:
// Total = 4497*/

// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;

// const totalPrice = shirt+pant+shoes;
// console.log("Total Price : ",totalPrice)


/* Task 10 — Simple Marks Calculation
// Create marks for 3 subjects:
// Tamil = 80
// English = 75
// Maths = 90
// Calculate:
// •	Total marks
// •	Average marks*/

// let tamil = 80;
// let english = 75;
// let maths = 90;

// let totalMarks = tamil + english + maths;
// let averageMarks = totalMarks / 3;

// console.log("Total Marks:", totalMarks);
// console.log("Average Marks:", averageMarks);

// /*________________________________________
// Increment & Decrement Tasks
// Task 11 — Post Increment
// Predict the output before running the code:
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);
// Write your expected output first, then run it.*/

//Output
// let a = 10;

// let b = a++;

// console.log("A :",a);//11
// console.log("B :",b);//10


// /*________________________________________
// Task 12 — Pre Increment
// Predict the output:
// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);*/

// output will be a=11 and b=11
// let a = 10;

// let b = ++a;

// console.log("A : ",a);//11
// console.log("B : ",b);//11


/*Task 13 — Post Decrement
// Predict:
// let a = 20;

// let b = a--;

// console.log(a);
// console.log(b);*/

//output will be a=19 and b=20

// let a = 20;

// let b = a--;

// console.log("A : ",a);//19
// console.log("B : ",b);//20


/*Task 14 — Pre Decrement
// Predict:
// let a = 20;

// let b = --a;

// console.log(a);//19
// console.log(b); //19
// */

//Ouptut will be a=19 and b=19

// let a = 20;

// let b = --a;

// console.log("A : ",a);//19
// console.log("B : ",b); //19

/*Challenge Tasks
// Task 15 — Find the Final Values
// Without running the code, find the output:
// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// Students should write the answer first and then verify it.*/


// let a = 5; //null

// let b = a++; // a+1 = 6 // b=5 //b=4

// let c = ++a; // ++a = 1+6 = 7 //c=7

// let d = b--; //b-1 = 5 - 1 = 4 // d=5

// console.log("A : ",a); //7

// console.log("B : ",b); //4

// console.log("C : ",c); //7

// console.log("D : ",d); //5




/* Task 16 — Assignment Operators
// Given:
// let num = 10;
// Perform each operation separately:
// +=
// -=
// *=
// /=
// %=
// **=
// Example:
// num += 5;
// console.log(num);*/

let num =10;

// num+=10;

// console.log("Add Assignment : ",num); //20

// num-=3; // num = 10

// console.log("Subtract Assignment : ",num); //7

// num*=5; //num = 10

// console.log("Multiply Assignment : ",num);// 50

// num/=4; //num = 10

// console.log("Divide Assignment : ",num); //2.5

// num%=5; //num = 10

// console.log("Modulus Assignment : ",num);//0

// num**=3; //num = 10

// console.log("Exponentiation Assignment : ",num); // 1000



/* Task 17 — Mini Student Profile
// Create a student profile using:
// Variables
// Name
// Age
// City
// College
// Array
// Store 5 favorite subjects.
// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent
// Then print:
// 1.	Student name
// 2.	Student age
// 3.	City
// 4.	First subject
// 5.	Last subject
// 6.	Total subjects
// 7.	Complete object*/

let stdName = "Krish";
let stdAge = 21;
let stdCity = "Perambalur";
let stdCollege = "MBEC";
let subject = ["Math","Phy","Chem","Eng","Tamil"];
let emp = {
    name:"Athik",
    age:27,
    city:"Neyveli",
    subjects:["Mech","Electrical","Instrumentation"],
    isStudent:false
}

// let len = subject.length;

// console.log("Student Name : ",stdName);
// console.log("Student Age : ",stdAge);
// console.log("Student City : ",stdCity);
// console.log("Student College : ",stdCollege);
// console.log("First Subject : ",subject[0]);
// console.log("Last Subject : ",subject[len-1])
// console.log("Total Subjects : ",len)
// console.log("Complete Object : ",emp)


/*Final Challenge — User + Calculator
// Get two numbers from the user using prompt().
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Power
// Then display all results using console.log().
// */

let num1 = prompt("Enter Num1")
let num2 = prompt("Enter Num2")

console.log("Num1 :",num1)
console.log("Num2 : ",num2)

let add = num1 + num2
let sub = num1 - num2
let multi = num1 * num2
let div = num1 / num2
let modulo = num1 % num2
let expo = num1 ** num2

console.log("Addition : ",add)
console.log("Subtraction : ",sub)
console.log("Multiplication : ",multi)
console.log("Division : ",div)
console.log("Modulus : ",modulo)
console.log("Exponentiation : ",expo)
