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


// Palindrome of not 

// normal way - Time complexity - Theta(num of digits)

const palindromeOrNot = function(num) {
    let new_num = 0;
    const old_num = num;
    while(num) {
        new_num = new_num * 10 + num%10;
        num = Math.trunc(num / 10);
    }

    return old_num === new_num;
}

console.log(palindromeOrNot(252));