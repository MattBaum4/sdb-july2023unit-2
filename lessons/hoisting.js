/* 
First pass: Stores our variable declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there), but does not assign them their values. Anything that needs to be hoisted is hoisted.


Second pass: Assigns the values to our variables and executes any hoisted source code.
*/


console.log(name)
func1()
var name = "matt";


function func1(){
    console.log("hello from func1")
}
let funcExample = function(param1, param2){
    console.log(param1, param2)
}

funcExample(2, 3);

// Arrow function example
let funcExample2 = (param1, param2) => {
    return param1 + param2
};

let sum1 = funcExample2(2, 5)
console.log(sum1)

//Arrow function example refactored for a one liner
// Note - The return is assumed when it is a single line arrow function

let funcExample3 = (param1, param2)=> param1+param2;
let sum2 = funcExample3(4, 4);
console.log(sum2);

