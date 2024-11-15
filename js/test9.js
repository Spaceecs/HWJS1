let number = prompt("Enter a three-digit number:");
number = parseInt(number);
let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let ones = number % 10;
let palindrome = ones * 100 + tens * 10 + hundreds;
alert(`The palindrome of ${number} is ${palindrome}.`);
