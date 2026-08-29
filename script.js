let stdName = "Karthik"
let stdAge = 21
let stdMark = 85

console.log("Name: " + stdName)
console.log("Age: " + stdAge)
console.log("Mark: " + stdMark)

let userName = prompt("What is your name?")
alert("Hello, " + userName + "!")

let userAge = prompt("What is your age?")
console.log("User's Age: " + userAge)

let userConfirmation = confirm("Do you like programming?")
if (userConfirmation) {
    console.log("User likes programming.")
} else {
    console.log("User does not like programming.")
}

let userNameForDisplay = prompt("Please enter your name to display on the webpage:")
document.writeln("Welcome, " + userNameForDisplay + "!")
