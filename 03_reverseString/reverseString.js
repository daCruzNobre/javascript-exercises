const reverseString = function(string) {
    const stringArray = string.split("");

    const newStringArray = [];

    length = stringArray.length

    stringArray.forEach(element => {
        newStringArray[length] = element;
        length--
    });

    return reversedString = newStringArray.join("")
};
 
module.exports = reverseString;
