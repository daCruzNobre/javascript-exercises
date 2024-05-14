const palindromes = function (string) {
    string = string.toLowerCase();
    stringArray = string.split("");  
    stringArray = stringArray.filter(element => element !== " ")
    stringArray = stringArray.filter(element => element !== ",")
    stringArray = stringArray.filter(element => element !== ".")
    stringArray = stringArray.filter(element => element !== "!")    
           
    reverseArray = stringArray.toReversed();
    reverseString = reverseArray.join("");
    string = stringArray.join("");
    
    if(string === reverseString){
        return true;
    } else {
        return false;
    };  

};




// Do not edit below this line
module.exports = palindromes;
