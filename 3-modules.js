//MODULES :Basically they are the encapsulated code (only share minimum)
// to print the ${} values you must use `` these
// Every File in node is a module

const names = require('./4-name')
const sayamit = require('./5-utensils')
const data = require('./6-alternative_syntax')

require('./7-mind_grenade')

console.log(data)
sayamit(names.amit);
sayamit(names.raul);