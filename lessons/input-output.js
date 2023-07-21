// CTRL-C will exit a node environment

const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(questionText, resolve);
    });
  }

  // ! COMPUTER RESPONSE COLOR
function computerResponse(string){
    let white = "\x1b[0;39m";
    let yellow = "\x1b[0;33m";
    console.log(yellow+string+white)
}


  // ! END OF COMPUTER RESPONSE COLOR
async function start(){

    let firstName = await ask("What is your name? ")
    let quest = await ask("What quest do you seek? ")
    let favoriteColor = await ask("What is your favorite color? ")

computerResponse("Good morning, ", firstName, "best of luck with ", quest, "and here is a ", favoriteColor, "flower for good luck!")


process.exit()
}

start()
