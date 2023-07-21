// let fruit1 = "banana"
// let fruit2 = "apple"

// let text = "I love apples!";

// if(
// text.toLowerCase().includes("banana")||
// text.toLowerCase().includes("apple")){
//     console.log("true")
// } else {
//     console.log("false")
// }


// let num = 3

// if(num % 2 === 0 && num > 0){
// console.log(true)
// } else {
//     console.log(false)
// }


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

switch (diceRoll) {
    case 1:
        color : "red"
        break;
    case 2:
        color: "green"
        break;
    case 3:
        color : "blue"
        break;
    case 4:
        color : "yellow"
        break;
    case 5:
        color : "purple"
        
    default:
        color : "orange"
        break;
}