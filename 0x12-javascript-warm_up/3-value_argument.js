#!/usr/bin/node
const arg = process.argv[2]; // Get the second argument in the process.argv array, which is the first user argument
if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
