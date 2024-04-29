const sumAll = function(numberOne, numberTwo) {
    let sum = 0;
    let biggerNumber;
    let smallerNumber;
    let typeOfNumberOne;
    let typeOfNumberTwo;
    typeOfNumberOne = typeof numberOne;
    typeOfNumberTwo = typeof numberTwo;
    if( typeOfNumberOne != "number" || typeOfNumberTwo != "number")
    {
        return "ERROR";
    }
    if (numberOne < 0  || numberTwo < 0) 
    {
        return "ERROR";
    }   
    if (numberOne > numberTwo)
    {
        biggerNumber = numberOne;
        smallerNumber = numberTwo;
    }else
    {
        biggerNumber = numberTwo;
        smallerNumber = numberOne;
    }
    for(index = 0; index < biggerNumber; index++)
    { 

        sum = sum + (smallerNumber + index)
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
