#!/usr/bin/node
const fs = require('fs');

const fileA = process.argv[2];
const fileB = process.argv[3];
const fileC = process.argv[4];

fs.readFile(fileA, 'utf-8', (err, dataA) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.readFile(fileB, 'utf-8', (err, dataB) => {
    if (err) {
      console.error(err);
      return;
    }

    const combinedData = dataA + dataB;
    fs.writeFile(fileC, combinedData, 'utf-8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
});
