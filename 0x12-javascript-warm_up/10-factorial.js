#!/usr/bin/node
function factorial(n) {
  if (isNaN(n) || n <= 1) { // Base case: factorial of NaN or non-positive integers is 1
    return 1;
  }
  return n * factorial(n - 1); // Recursive case
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));
