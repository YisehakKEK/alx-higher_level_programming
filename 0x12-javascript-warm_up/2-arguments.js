#!/usr/bin/node
const args = process.argv.length - 2; // subtract 2 to ignore the node path and file path
if (args === 0) {
  console.log('No argument');
} else if (args === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
