const packageConfig = require('./moduleA/package.json')

console.log(Object.getOwnPropertyNames(packageConfig.exports))

console.log(Object.keys(packageConfig.exports))
