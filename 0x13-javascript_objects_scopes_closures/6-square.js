#!/usr/bin/node
const Square = require('./5-square');

class Square2 extends Square {
  charPrint(c) {
    const char = c || 'X'; // Default to 'X' if c is undefined
    for (let i = 0; i < this.height; i++) {
      console.log(char.repeat(this.width));
    }
  }
}

module.exports = Square2;
