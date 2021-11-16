const packageConfig = require('./moduleA/package.json')

console.log(Object.getOwnPropertyNames(packageConfig.exports))

console.log(Object.keys(packageConfig.exports))


const testObjA = {
    "import": "./esm-export.mjs",
    "require": "./reuire-export.cjs",
    "node": {
        "require": "./require-export.cjs",
        "import": "./esm-export.mjs"
    },
    "default": "./main-export.mjs"
}

const testObjB = {
    "node": {
        "require": "./require-export.cjs",
        "import": "./esm-export.mjs"
    },
    "default": "./main-export.mjs",
    "import": "./esm-export.mjs",
    "require": "./reuire-export.cjs",
}

console.log(Object.keys(testObjA))
console.log(Object.getOwnPropertyNames(testObjA))
console.log(Object.keys(testObjB))
console.log(Object.getOwnPropertyNames(testObjB))
