const math = require('./math');

console.log('Result is', math.add(2, 3));

// Other Way.

const {add, sub} = require('./math')
console.log("Result is", sub(3, 4));