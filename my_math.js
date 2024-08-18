//creating module
const add = (a, b) => {
    return a + b;
};

module.exports = {
    add: add,
    mult: (a, b) => {
        return a * b
    }
};