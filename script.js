"use strict";

// Function to generate random passwords

const createRandomPass = () => {
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
};

createRandomPass();
