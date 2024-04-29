 
const removeFromArray = function(array, ...elementsToRemove) {
    const newArray = [];
    array.forEach(element => {
        isIncluded = elementsToRemove.includes(element);
        if (isIncluded !== true)
        {
            newArray.push(element);
        };
    });
    return newArray;

};
//  newArray = removeFromArray([1, 2, 3, 4], 3)
//  console.log(newArray)

// Do not edit below this line
module.exports = removeFromArray;
