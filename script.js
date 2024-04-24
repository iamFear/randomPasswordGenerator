"use strict";

// Function to generate random passwords
// NOTE: Default password lenght is 8, default use of symbols is true

const createRandomPass = (length = 8, useSymbols = true) => {
  const uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowercase = uppercase.map((n) => n.toLowerCase());
  const symbols = ["!", "@", "#", "$", "%", "&", "*"];
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Colection of arrays
  const regular = [...uppercase, ...lowercase, ...symbols, ...nums];
  const noSymbols = [...uppercase, ...lowercase, ...nums];

  let output = ``;

  // If user wants symbols
  if (useSymbols === true) {
    for (let i = 0; i < length; i++) {
      // Choose a random character from the regular array and then add it to the output
      output += regular[Math.trunc(Math.random() * regular.length)];
    }
    // If user dont want symbols
  } else {
    for (let i = 0; i < length; i++) {
      // Choose a random character from the regular array and then add it to the output
      output += noSymbols[Math.trunc(Math.random() * noSymbols.length)];
    }
  }

  return output;
};
