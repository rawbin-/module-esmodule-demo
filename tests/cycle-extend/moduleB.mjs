console.log('#moduleB start')
import moduleA from "./moduleA.mjs"
console.log(moduleA.varA,moduleA.varB,moduleA.varC)
export const varA = 1

const varB = 2
const varC = 3

export default {
    varB,
    varC
}

console.log('#moduleB end')
