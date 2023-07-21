function diceRoll() {
    var rollResult = Math.floor(Math.random() * 6) + 1;
    return rollResult;
}
var rollResult = diceRoll();
console.log("the dice rolled: "+ rollResult)

if(rollResult == 1){
    console.log("red")
}
if(rollResult == 2){
    console.log("green")
}
if(rollResult == 3){
    console.log("blue")
}
if(rollResult == 4){
    console.log("yellow")
}
if(rollResult == 5){
    console.log("Purple")
}
if(rollResult == 6){
    console.log("Orange")
}

//Question - I didnt use else statements like jason did when he presented but mine worked just fine as well. Is it bad practice to just make a bunch of if statements?

//SRC     conditional-logic.md notes


//Question - what does "return" mean?    example - return total; kinda went over this with rob and to my knowledge return is storing data.

//Question - capitalize replit

/* 
function capitalize(someWord) {
 let firstLetter = someWord[0];
 let restOfWord = someWord.slice(1); <---- THIS IS THE LINE                Why does this work but theres not a way to do like >=1 or something to recognize that you want everything except the first letter to not be included?
 let fullWord = firstLetter.toUpperCase() + restOfWord.toLowerCase();

  console.log(fullWord)
}

console.log(capitalize('tomato'));     // should print 'Tomato'
console.log(capitalize('BACON'));      // should print 'Bacon'
console.log(capitalize('LeTTuCe'));    // should print 'Lettuce'
console.log(capitalize('mayonnAISE')); // should print 'Mayonnaise'
*/


// ? Question - with the Math.floor  - it just rounds down 
