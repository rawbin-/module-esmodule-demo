console.log('#moduleA start')
import moduleB from "./moduleB.mjs"
console.log(moduleB.varA,moduleB.varB,moduleB.varC)
export let varA = 1

const varB = 2
const varC = 3

export default {
    varB,
    varC
}

console.log('#moduleA end')
