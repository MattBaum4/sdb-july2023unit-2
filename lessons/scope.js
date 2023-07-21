/* 
SCOPE:

Scope is how a computer keeps track of all the variables in a program.

Scope can be nested in block scopes or global scope

*/

let x = 12 //global scope (outside of a function or if statement)

function scope(){
    let x = 33// block scope
    console.log(scope, x);
}
scope();
console.log(x);



//! Example number 2
let y = 12 

function scope2(){
    y = 33
    console.log(scope2, y);
}
scope2();
console.log(y);

// ! Example 3 

let z = 12
function scope3(){
    let z = 45
                                        // ! Why does removing the let in let z = 45 make it equal 45 when ran?      // debugger help - didnt look like robs on the left column.
    if(true === true){
        let z = 15
        console.log("if z", z) // 15
    }
    console.log("scope3 z", z) // 45
}

scope3();

console.log(z) // 12
