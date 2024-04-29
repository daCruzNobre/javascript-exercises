//Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900)
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

const leapYears = function(year) {
    let stringYear = year.toString();
    
    if(stringYear.charAt(stringYear.length-1) === "0" && stringYear.charAt(stringYear.length-2) === "0")
    {
        
        if(year%100=== 0 && year%400 ===0){return true;}
        else{return false;}
    }
    if(year%4 === 0)
    {
        return true;
        
    }
    if(year%100=== 0 && year%400 ===0){return true;}
    else
    {
        return false;
    }
};
//else if(year%100=== 0 && year%400 ===0){return true;}
// Do not edit below this line

module.exports = leapYears;
