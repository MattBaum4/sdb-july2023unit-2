/* 
Types - Data Types
- Strings
- Numbers
- Booleans
*/

/* 
STRINGS:
- These datatypes are used to represent text.
- You can use Double Quotes
- You can use Single Quotes
- You can use Backticks
*/

let string1 = "double quotes";
//prettier-ignore
let string2 = 'single quotes';

let string3 = `backtick quotes`;

// STRING CONCATENATION
/* 
When you add two or more strings together they will become a single string.
Strings will concatenate with any data type and will result in a string
*/

let greeting = "Good Morning";
let firstName = "Matthew";

console.log(greeting +" "+ firstName);

// Solution using backticks to allow for the space 

let fullGreeting = `${greeting} ${firstName}`;

console.log("Full Greeting", fullGreeting);

// ! If you want to know what type of variable you are using, use the TYPEOF

console.log(typeof firstName);

// To dertermine the size of the string you use the length method
let animal = "horses"
console.log("animal size", animal.length);
// To reference a single letter in a string you can use square brackets. 
// ! Remember it is zero based. 

console.log('1st letter', animal[0]);

// ? If I wanted to grab the last letter of the animal, what would that look like?
animal = "elephant"
lastLetterNumber = animal.length
console.log("last letter", animal[lastLetterNumber-1])

// Removing white space from a string using trim

let textData = "                    Hello            ";
console.log("Trim Example:", textData.trim());

// Add a new line in the console

let paragraphString = "I went to the store today. \nI bought eggs and milk."
let linebreak = "\n"

let paragraphString2 = "I went to the store today." +linebreak+ "I bought eggs and milk." 
console.log(paragraphString);


// ! NUMBERS

let currentTemp = 78;
console.log(typeof currentTemp);

//! Be Careful of mismatching Strings and Numbers

let myAge = 43
let friendAge = "35"

console.log(myAge + +friendAge); //Problem is it combines them treating them as strings

//  You can convert a string to a number 
// ParseInt, Number(), or a plus sign.
console.log(myAge + parseInt(friendAge)); //parseInt method
console.log(myAge + Number(friendAge));  //this is the number method
console.log(myAge + +friendAge); // plus sign method

let fruit = "apple";

let snack = fruit;
 
console.log(snack)

// SLICE METHOD for string
console.log("blueberry".slice(0,4))




// ! Number Operators
/* 
Adding numbers (+)
Subtracting (-)
Multiply (*)
Divide (/)

Exponents (**)
Modulus(%) provides you with the remainder



*/
// 3^3
console.log(3**3);

// 21/10 = remainder
console.log(21 % 10);

// Even Number Example:
console.log(32 % 2);

// Odd number Exaple:
console.log(33 % 2);


// ! Shopping Cart Example
let totalPrice = 0;

let price1 = 10

totalPrice = totalPrice + price1

let price2 = 15

totalPrice = totalPrice + price2

let price3 = 7

totalPrice += price3
console.log(totalPrice);


// ! Funky Math

let funkyTotal = 0.1 + 0.2;
console.log(funkyTotal);

console.log("Fixed 2 Digits", funkyTotal.toFixed(2))
let flooredNumber = 25.56
console.log("Floored Number:", Math.floor(flooredNumber));

// ? How do I get 25.5 using Math.floor ?
console.log("Floored Number:", Math.floor(flooredNumber*10)/10);


// ! Boolean

let isOver21 = true;
let isLoggedIn = false;

