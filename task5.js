//Variables & Data Types (Questions 1-8)

// ### Q1: What is the difference between var, let, and const?

// var can be redeclared,reassigned and function scoped variable.

// let can be reassigned and can't be redeclared and block scoped variable

// const can't be reassigned and redeclared and block scoped variable


// Q2: Can you re-declare a variable with var? What about let and const?

// Yes we can re-declare a variable with var

// let and const can't be re-declare but can be re-assign

// Q3: What is the output of this code?
// javascript
// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z); // x = 20 ,y=25 , z will throw error can't be reassign const variable


//Q4: What is the difference between declaring and initializing a variable?

//Declare
// let x; // A variable without initialization is known as declaration

// let y =10; // A variable assign with a value is known as initialization.

// Q5: What will be the output?
// javascript
// let a;
// console.log(a);//undefined
// ```

//Q6: What is hoisting? Give an example.

// Hoisting is a JavaScript behavior where variable and function declarations are processed before the code is executed.

// However, var, let, const, and functions behave differently during hoisting.

// Example using a var:

// console.log(x);
// var x = 10;

// Output: undefined

// var x;
// console.log(x);
// x = 10;

// So, the declaration is hoisted, but the assignment is not.

// Example using a function:

// greet();

// function greet() {
//     console.log("Hello!");
// }

// Output: Hello!

// The function declaration is hoisted, so it can be called before its declaration.

// let and const are also hoisted, but they cannot be accessed before their declaration because they are in the Temporal Dead Zone (TDZ).

// Q7: What is the difference between null and undefined?

// undefined → "Value has not been assigned.

// let x;
// console.log(x);
// Output : undefined

// null → "I intentionally set the value to empty.

// let y = null;
// console.log(y);
// Output : null

// Q8: What will be the output?
// javascript
// console.log(typeof null); //Object
// console.log(typeof undefined); //undefined
// console.log(typeof []); //Object
// console.log(typeof {}); //Object
// 

// ---

// Operators (Questions 9-14)

// Q9: What is the difference between == and ===?

// == is loose equality compares the values only not the datatype.
// console.log(5 == "5"); // true
// === is strict equality compares the values and datatypes.
// console.log(5 == "5"); // false

// Q10: What is the difference between ++i and i++?

// Both ++i and i++ increase the value of i by 1, but the difference is when the incremented value is used.

//++i preincrement

// Increases the value before using it.

// Returns the new value.

// let i = 5;

// console.log(++i);
// console.log(i);

//Output : 6 , 6

//i++ postincrement

// Uses the value before increasing it.

// Returns the old value.

// let i = 5;

// console.log(i++);
// console.log(i);

//Output : 5 , 6

// Q11: What will be the output?
// ```javascript
// let x = 10;
// let y = "5";
// console.log(x + y); //"105"
// console.log(x - y); //5
// console.log(x * y); //50
// console.log(x / y); // 2
// ```

// Q12: What are logical operators? Explain with examples.

// Logical operators are used to combine or check multiple conditions. They return true or false.

// There are 3 main logical operators:

// AND (&&) – Returns true if both conditions are true.
// console.log(10 > 5 && 20 > 10); // true

// OR (||) – Returns true if at least one condition is true.
// console.log(10 > 5 || 20 < 10); // true

// NOT (!) – Reverses the result.
// console.log(!(10 > 5)); // false

// example:
// && means both, || means either one, and ! means opposite.

// Q13: What will be the output?
// ```javascript
// console.log(5 > 3 && 10 > 5); // true && true = true
// console.log(5 > 10 || 10 > 5);//false || true = true
// console.log(!(5 > 3));// !(true) = false
// ```

// Q14: What is the ternary operator? Give an example.

// The ternary operator is a short way of writing an if-else condition.

// Syntax:

// condition ? value1 : value2;

// Example:

// let age = 20;

// let result = age >= 18 ? "Eligible" : "Not Eligible";

// console.log(result);

// Output: Eligible

// Type Casting (Questions 15-17)

//Q15: What is the difference between implicit and explicit type casting?

// Type casting means converting one data type into another.

// Implicit type casting → JavaScript converts the type automatically.
// let result = "10" + 5;
// console.log(result); // "105"

// Explicit type casting → We manually convert the type.
// let num = Number("10");
// console.log(num); // 10

// Q16: What will be the output?
// ```javascript
// console.log(Number("123")); //123
// console.log(Number("hello"));//Nan
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Boolean(0));//false
// console.log(Boolean("hello"));//true
// ```

// Q17: What is NaN? Give an example.

// NaN means Not a Number. It occurs when JavaScript tries to perform a mathematical operation that cannot produce a valid number.

// Example:

// let result = "hello" - 5;

// console.log(result); // NaN

// Conditional Statements (Questions 18-21)

// Q18: What is the difference between if-else and switch?

// Both are used to make decisions in JavaScript, but they are used in different situations.

// if-else → Used when checking conditions or ranges.
// let age = 20;

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// switch → Used when checking one value against multiple fixed values.
// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// Q19: What will be the output?
// javascript
// let age = 20;
// if(age >= 18) {//true
//     console.log("Adult"); //It will be executed
// } else {
//     console.log("Minor");
// }
// ```

// Q20: What is nested if? Give an example.

// A nested if means having one if statement inside another if statement. It is used when we need to check multiple conditions one after another.

// Example:

// let age = 20;
// let hasId = true;

// if (age >= 18) {
//     if (hasId) {
//         console.log("Entry allowed");
//     }else{
    //     console.log("Entry not allowed");
    // }
// }else{
    // console.log("Not eligible");
// }


// Q21: Write a program to check if a number is even or odd using ternary operator.

// let num = 10;

// let result = num % 2 === 0 ? "Even" : "Odd";

// console.log(result);

// Loops (Questions 22-25)

// Q22: What is the difference between while and do-while?

// Both are used for repeating a block of code, but the main difference is when the condition is checked.

// while → Checks the condition before executing the code.
// do-while → Executes the code first, then checks the condition.

// Example:

// let i = 1;

// while (i <= 3) {
//     console.log(i);
//     i++;
// }
// let j = 1;

// do {
//     console.log(j);
//     j++;
// } while (j <= 3);

// So, a do-while loop will execute at least once, even if the condition is false initially.

// Q23: What will be the output?
// ```javascript
// for(let i = 1; i <= 5; i++) {
//     console.log(i);//1,2,3,4,5
// }
// 

// Q24: What is the difference between for-of and for-in?

// Both are used to loop through data, but they work differently.

// for-of → Used to get the values.
// for-in → Used to get the keys/indexes.

// Example:

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// Output:

// Apple
// Banana
// Mango
// for (let index in fruits) {
//     console.log(index);
// }

// Output:

// 0
// 1
// 2

// Q25: Write a program to find sum of numbers from 1 to 100.

// let sum=0;

// for(let i=1;i<=100;i++){
//     sum+=i;
// }

// console.log(sum);

// Arrays (Questions 26-27)

// Q26: What is the difference between slice and splice?

// Both are used to work with arrays, but the main difference is whether they change the original array.

// slice() → Takes a portion of an array without changing the original array.
// splice() → Adds, removes, or replaces elements and changes the original array.

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// console.log(fruits.slice(1, 3));
// // ["Banana", "Mango"]

// console.log(fruits);
// // Original array remains the same

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// fruits.splice(1, 2);

// console.log(fruits);
// // ["Apple", "Orange"]


// Q27: What will be the output?
// ```javascript
// let arr = [1, 2, 3];
// arr.push(4);//[1,2,3,4]
// arr.pop();//[1,2,3]
// arr.unshift(0);//[0,1,2,3]
// arr.shift();//[1,2,3]
// console.log(arr);//[1,2,3]
// ```

//Functions (Questions 28-30)

// Q28: What is the difference between function declaration and function expression?

// Both are used to create functions, but they are written differently.

// Function Declaration → Function is declared using the function keyword with a name.
// function greet() {
//     console.log("Hello");
// }

// Function Expression → Function is stored inside a variable.
// let greet = function() {
//     console.log("Hello");
// };

// Function declaration can be called before it is defined because it is hoisted.

// greet();

// function greet() {
//     console.log("Hello");
// }

// Function expression cannot normally be called before its assignment.

// Q29: What is an arrow function? Give an example.

// An arrow function is a shorter and simpler way to write a function in JavaScript. It uses the => symbol.

// Example:

// let add = (a, b) => {
//     return a + b;
// };

// console.log(add(10, 20));

// Q30: What will be the output?
// javascript
// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message); //Hello
