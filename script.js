"use strict";

// Function to generate random passwords

const createRandomPass = (length, useSymbols) => {
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
  const regular = [uppercase, lowercase, symbols, nums];
  const noSymbols = [uppercase, lowercase, nums];

  let output = ``;

  // If user wants symbols
  for (let i = 0; i < length; i++) {
    const arr = regular[Math.trunc(Math.random() * regular.length)];
    output += arr[Math.trunc(Math.random() * arr.length)];
  }

  // If user dont want symbols

  return output;
};

console.log(createRandomPass(12));
