/* 
FUNCTIONS
- Functions provide a block of code that will only be ran once it is called upon.

- It must start of with the keyword of 'function' followed by the name you give your function

- Functions do NOT need to have arguments or parameters.
- Functions can and most likely will return something


*/
/* 
1- keyword function
2- function name
3- parameters/arguments

*/
// (1)     (2)   (3)
function example1(){
    // This block of code will only be executed when the function is called.

    console.log("Example1 Function Was Executed")
}
example1()
// You MUST call the function for it to be executed


let player1Score = 10000

function resetPlayerScore(){
    player1Score = 0;
}
resetPlayerScore();
console.log(player1Score);


// Example of functions with arguments
// ! Arguments are comma separated
function example2(param1, param2){
    console.log("Example 2 function was executed")
    console.log("param1", param1)
    console.log("param2", param2)
}


example2("Hello", "World")
example2("Matthew","Baum")

function sumTwoNumbers(number1, number2){
    let total = number1 + number2;

    return total;
}

let sum1 = sumTwoNumbers(10,5);
console.log(sum1)

// ? Write a cuntion that will take a temp in degree F and conver it to degree C

function convertDegreeFtoDegreeC(tempInDegreeF){
    let tempDegreeC = 5/9 * (tempInDegreeF - 32)
    return tempDegreeC
}

console.log(convertDegreeFtoDegreeC(32))
console.log(convertDegreeFtoDegreeC(212))
console.log(convertDegreeFtoDegreeC(70))


// ? Write a function that will accept a dog's age and returns a human age
// ? Human Age = (Dog age-2) x 4 + 21

function calcDogYearsToHumanYears(dogAge){
    let humanAge = (dogAge -2) * 4 + 21;
    return humanAge;
}
console.log(calcDogYearsToHumanYears(7))

// ? Write a function that will take 3 arguments (length, width, height)
// ? Function should return the volume of the Cuboid;

function cuboidVolume(length, width, height){
    let totalVolume = (length * width * height)
    return totalVolume;
}
let cube1 = cuboidVolume(5, 7, 10);
console.log(cube1);

//! Important for you to use in your project.

function randomNum(min, max) {
    let range = max - min + 1;
    console.log("Function ran");
    return Math.floor(Math.random() * range) + min;
  }

let minRange = 5
let maxRange = 10
  let computerRandomNumber = randomNum(5, 10)
  console.log(computerRandomNumber);



  // ! Refactoring Functions

  function sumTwoNumbers(number1, number2){
    return number1 + number2;
}
let sum3 = sumTwoNumbers(5, 19);

console.log(sum3)


// ? Write a function that is called  isEvenlyDivisible
// ? Function will take two parameters
// ? Function will return true if the remainder is 0 else false
// ? ADDED COMPLEXITY: ERROR MESSAGE- Function should return a message if the num2 is larger than num1 "Your second number is larger than the first"

function isEvenlyDivisible(num1, num2){
   
    if(num2 > num1){
        return "Your second number is larger than the first";
    }
   if(num1 % num2 === 0){
        return true;
    }else{
        return false;
    }
}
let divisible1 = isEvenlyDivisible(2, 10);
console.log(divisible1)

// ! Refactored code

function isEvenlyDivisible(num1, num2){
   if(num2 > num1)  return "Your second number is larger than the first";
    return num1 % num2 === 0 ? true : false;
}


// ! Maybe some code for project

// ex: `        test@email.CoM   `


function userInputCleaner(words){
 return words.toLowerCase().trim()
}
let userInput = userInputCleaner(`        test@eMail.CoM   `)
console.log(userInput)


