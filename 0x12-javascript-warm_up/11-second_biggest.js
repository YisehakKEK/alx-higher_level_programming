#!/usr/bin/node
const args = process.argv.slice(2).map(Number); // Convert command line arguments to numbers

function findSecondBiggest(numbers) {
  if (numbers.length < 2) {
    return 0; // If less than two numbers, return 0
  }
  let first = -Infinity, second = -Infinity;
  for (let number of numbers) {
    if (number > first) {
      second = first; // update second to first before updating first
      first = number; // update first to the new largest number
    } else if (number > second && number !== first) {
      second = number; // update second if number is greater than second but not equal to first
    }
  }
  return second;
}

console.log(findSecondBiggest(args));
