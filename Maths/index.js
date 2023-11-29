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

// normal way as well as efficient one - Time complexity - Theta(num of digits)

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

// Factorial of number

// normal way - Time Complexity - O(n)

const factorialOfNum = function(num) {
    
    let factorial = 1
    while(num > 1) {
        factorial= factorial * num;
        num--;
    }

    return factorial;
}

console.log(`Factorial of number = ${factorialOfNum(20)}`);


// count trailing zeros

const countTrailingZeros = function(num) {
    let total = 0;
    for(let i = 5; i<=num; i*=5) {
        total = total + (num/i);
    }

    return total;
}

console.log(`Number of trailing zeros in factorial = ${countTrailingZeros(125)}`);


// GCD normal way - O(min(a,b))

const gcd = function(num1, num2) {
    let largest_num = 1;
    let min = num1;
    if(num1>num2) {
        min = num2;
    }
    for(let i = 2; i<=min; i++) {
        if(num1%i == 0 && num2%i ==0) {
            largest_num = i;
        }
    }

    return largest_num;
}

// Using Euclidian Algorithm Optimized - O(log n)

const eGCD = function(num1, num2) {
    if(num2 == 0) {
        return num1;
    }

    return gcd(num2, num1%num2);

}

console.log(`GCD = ${gcd(12,15)}`);
console.log(`eGCD = ${gcd(100,200)}`);


// LCM normal method

const lcm = function(num1, num2) {
    let lcm = Math.max(num1, num2);

    for(let i = lcm; i <= num1*num2; i++) {
        if(i%num1 ==0 && i%num2 ==0) {
            lcm = i;
            return lcm;
        }
    }

    return lcm;
}

// LCM optimized - a*b = gcd(a.b) * lcm(a,b)

const oLCM = function(num1, num2) {
    return (a*b)/eGCD(num1, num2);
}

console.log(`LCM = ${lcm(125, 115)}`);
console.log(`oLCM = ${lcm(125, 115)}`);