#!/usr/bin/node
exports.addMeMaybe = function (number, theFunction) {
  theFunction(number + 1); // Increment the number and call the function
};
