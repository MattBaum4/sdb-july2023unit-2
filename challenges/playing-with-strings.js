let stringSentence = "All dogs are good dogs"
console.log(stringSentence.length)
// The length came back as 22

console.log("titanic".toUpperCase())
console.log("QUIETLY".toLowerCase())
console.log("Java".repeat(10))
console.log("berry".charAt(1))
console.log("berry".charAt(0))
console.log("banana".includes("nan"))
console.log("banana".endsWith("ana"))
console.log("blueberry".replace("blue", "black"))

console.log("drive"+"way")
console.log('Java'+'Script')
console.log("Bert's pal Ernie"+' sings "Rubber Duckie"')

console.log(`two plus two is ${2 + 2}`)

let fruit = "     banAna   "
console.log(fruit.toLowerCase().includes("ana"));

// 5991
// 45653454355991556634

let actualPin = '5991'
let codeTypedIn = "4565345435445991556634"

console.log("Can you enter the house:", codeTypedIn.includes(actualPin));
