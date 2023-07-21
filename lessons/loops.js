/* 
LOOPS

- They offer a quick and easy way to do something repeatedly.
- There are several types of loops 
- For Loops
- While Loops
- Do While Loops

*/

// ! DANGER : There is a danger in being stuck in an infinite loop

// For Loop
/* 
1. sets the variable before the loop starts
2. defines the condition of the loop to run (ex: it's going to continue until i reaches 10)
3. Increases the value of i each time the code block is executed in the loop.
*/

//   1)          2)       3)
for(let i = 0; i <= 10; i++){
    // anything in the curly boy is loopable code
    console.log(i)
}


let city = "Houston"
console.log(city[0])
console.log(city[1])

for(let i=0; i < city.length; i++){
    console.log(city[i])
}

// ? Create a for loop that starts at 1 and goes to 100 console logs (i )
// ? Create an if statement inside the for loop to only console log (i) if it is even
for(let i =0; i <= 100; i++){
    console.log(i);
// How can I tell if number is even or odd?
// Convert that even or odd statement to a truthy falsy statement.

// ! Modulus === 0 then it's even
    if (i % 2 === 0){
    console.log(i);
    }
}



// ! WHILE LOOPS

/* 
This will loop through the code black as long as the condition is true
*/


let i = 0;
while(i<=10){
    console.log(i)
    i++;
}

// ? Create a while loop that will loop through 1 to 30 and add up the total while it is going through the loop.

i = 1;
let total = 0;

while(i<=30){
    // total = total+i
    total += i
    i++;
}
console.log(total);