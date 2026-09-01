/*•	Create a variable for student name, age, and mark and print all three.
•	Ask the user's name using prompt() and display it using alert().
•	Ask the user's age using prompt() and print it using console.log().
•	Ask the user a question using confirm().
•	Ask the user's name and display it on the webpage using document.writeln().
*/

let studentName = "Karthik";
let studentAge = 20;
let studentMark = 85;

console.log("Student Name: " + studentName);
console.log("Student Age: " + studentAge);
console.log("Student Mark: " + studentMark);

let userName = prompt("Please enter your name:");
alert("Hello, " + userName + "!");

let userAge = prompt("Please enter your age:");
console.log("User Age: " + userAge);

let userConfirmation = confirm("Are you satisfied with this training?");
if (userConfirmation) {
    console.log("Yes, I am satisfied with the training.");
} else {
    console.log("No, I am not satisfied with the training.");
}

let userNameForDisplay = prompt("Please enter your name again to display on the webpage:");
document.writeln("Welcome, " + userNameForDisplay + "!");