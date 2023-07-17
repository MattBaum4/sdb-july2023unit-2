// Your code goes here.
console.log(typeof (1 + 7))
//if 1+7 isnt in its own parenthesis it will give number7 as the answer in console.

console.log(42 +"cheese")
//answer is cheese42 or 42cheese depending on which comes first in the (ex + ex)

console.log(2 + '4')
//answer was 24 it just adds them side by side not actually adding the numbers together because one is a string

console.log(typeof 2 + "4")
//the type is number4

const example1 = "pie" + true
console.log(example1)
//example answer was pietrue. to my understanding boolean is something that can be true or false - like the lightswitch example from class, it either is on or off. True or false.

const example2 = false + 8
console.log(example2)
// the answer was 8
const example3 = true + 8
console.log(example3)
// the answer was 9, and i think its because boolean is like 1 is true and 0 is false in boolean
// confirmed in google :D

console.log(typeof "word" + true)
console.log(typeof "word" + false)
//i get stringtrue and stringfalse back when adding a string to a boolean

console.log(null + 7)
//i got 7

console.log(undefined + 7)
// NaN

console.log(null + "cat")
// nullcat
console.log(undefined + "cat")
//undefinedcat
//I think this is because they arent numbers so it wont null it or give it a NaN - its a word not a number

console.log("dog" - 100)
//NaN kinda obvious you cant subtract 100 from a word 
console.log(true - 17)
//-16 which makes sense because true is equal to 1
console.log(false - 17)
//-17 which also makes sense because false is equal to 0
console.log("worm" * 8)
//NaN still (makes sense)
console.log("worm" / 8)
//NaN 
console.log("worm" % 8)
//NaN 
console.log(true / 8)
//.125 makes sense knowing the value of true is equal to1
console.log(false * 8)
// also makes sense knowing the value of false is equal to 0