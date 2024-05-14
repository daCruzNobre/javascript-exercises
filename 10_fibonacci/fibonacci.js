const fibonacci = function(index) {
    if(index < 0) {return "OOPS"};
    if (index == 0 || index == 1) {
        return Number(index);
    }
    return fibonacci(index-1) + fibonacci(index - 2);
};


// Do not edit below this line
module.exports = fibonacci;

