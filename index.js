//connecting modules
const os = require('os');
const res = os.platform();
console.log(res);

// connecting module my_math
const my_math = require('./my_math');
const math_add = my_math.add(3, 6);
const math_mult = my_math.mult(2, 5);
console.log(`Results: ${math_add} and ${math_mult}`);
