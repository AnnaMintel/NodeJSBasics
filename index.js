const num = 5
console.log(`Variable: ${num}`)


//library cowsay
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));


// library currency-converter-vl
const convert = require("currency-converter-vl");
let currencyConverter = new convert({from:"USD", to:"BYN", amount:1});

currencyConverter.convert().then((response) => {
    console.log(`Result: ${response}`);
});

