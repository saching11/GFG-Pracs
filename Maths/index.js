"use strict";
// Calculate number of digits 

// normal way - Time Complexity - Theta(number of digits in number)
// const numOfDigits = function(num) {
//     let digits = 0;
//     while(Math.trunc(num)) {
//         num = num/10;
//         digits++;
//     }

//     return digits;
// }

// Efficient way -  Using log - Time Complexity - Theta(1)
const numOfDigits = function(num) {
    if(num===0) return 1;
    const digits = Math.floor(Math.log10(num)) + 1;
    return digits;
}

console.log(numOfDigits(19999999999999999999999999000000000000000000000000000000000000000000000000000000000000000000000000001));