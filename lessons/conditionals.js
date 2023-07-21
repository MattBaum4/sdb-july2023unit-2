/* 
CONDITIONALS:

-We use conditionals whenever a decision needs to be made.
- These conditionals need to result in truthy or falsy test.
- Tools we have for decision making are the following:

-if statements
-if else statements
-if else if statements
*/


// ? Create an if statement for the condition using a 24hr clock (military time). If it is before 12pm console log good morning.

let currentHour = 13;

console.log(currentHour < 12);

/* 
1- keyword of "if" that will start the "if" block
2- conditional - must result in a truth
*/
//1        2
if(currentHour < 12){
    // (3)
    console.log("Good Morning")
}

// ! If Else Statement
// ? if it is less than 12 console log good morning if it is greater than 12 console log good afternoon
if(currentHour<12){
    console.log("Good Morning")
} else {
    console.log("Good Afternoon")
}

// ! If Else If Statement
// ? If the hours are before 12 console log good morning
// ? If the hours are between 12-5 console log good afternoon
// ? If the hours are between 5-12am console log good evening

if(currentHour<12){
    console.log("good morning")
} else if (currentHour< 17) {
console.log("good afternoon (else-if)");
} else { 
console.log("good evening")
}

// ! Movie Ticket Exercise
// ? You are in charge of coding out the conditional logic for charging a person, based on age, the ticket price.

// Child price of movie ticket is $5 per ticket
// Adult price of movie ticket is $10 per ticket

// Age for a child ticket is from 5 to 13 
// Age for adult ticket is anything older than 13
// ! Bonus Challenge 
// Seniors 55 and older 
// Ticket price for seniors is $7



// ! initial setup
let age = 69;
let priceOfTicket = 0;

// ! If Statements

if(age < 5){
    priceOfTicket = 0
} else if (age < 13) {
    priceOfTicket = 5
} else if(age>=55){
    priceOfTicket = 7;
} else {
    priceOfTicket = 10
}

console.log(`$${priceOfTicket.toFixed(2)}`);


// ! Ternaries

let number1 = 5 
let isEven = number1 % 2 === 0 ? true: false

console.log(isEven)

if (number1 %2 ===0){
    isEven = true
} else {
    isEven = false
}

let age1 = 26

let beverage = age1>=21 ? "beer" : "juice box"

console.log(beverage)