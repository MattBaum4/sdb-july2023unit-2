// let diceRoll = prompt('provide me with a number 1 through 6');
let diceRoll = Math.floor(Math.random() * 6) + 1
let color = null
if (diceRoll == 1) {
    color = "Red"
} else if (diceRoll == 2) {
    color = "Green"
}else if (diceRoll == 3) {
    color = "Blue"
}else if (diceRoll == 4) {
    color = "Yellow"
}else if (diceRoll == 5) {
    color = "Purple"
}else {
    color = "Orange"
}
console.log(diceRoll, color)

console.warn("WARNING")
console.error("ERROR ERROR ERROR")



let humanAnswer =""
while(humanAnswer.toLowerCase !== "q" && humanAnswer.toLowerCase !== color.toLowerCase){
    humanAnswer = prompt(
        "Choose from the following colors: Red, Green, Blue, Yellow, Purple, Orange"
        );

        // if(humanAnswer === color) {
        //     break;
        // }
}