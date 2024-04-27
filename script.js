"use strict";

// Function to generate random passwords
// NOTE: Default password lenght is 8, default use of symbols is true

const createRandomPass = (length = 8, useSymbols = false) => {
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

// Track if the user want symbols or not
let symbols = false;

// Display password or error messages
function displayPassword() {
  const length = +passwordLengthInput.value;

  if (length < 4 || length > 20) {
    msgOutput.textContent =
      "Please choose a length between 4 and 20 characters.";
    msgOutput.classList.remove("hidden");
    msgOutput.classList.remove("success");
    passwordLengthInput.value = "4";
    passwordOutput.textContent = "Awaiting for Password...";
  } else {
    passwordOutput.textContent = createRandomPass(length, symbols);
    msgOutput.classList.add("hidden");
  }
}

// Copy password to clipboard
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(passwordOutput.textContent);
    msgOutput.classList.remove("hidden");
    msgOutput.classList.add("success");
    msgOutput.textContent = "Your password was copied to the clipboard!";
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// DOM Manipulation:
const passwordLengthInput = document.querySelector(".length-input");
const createPasswordButton = document.querySelector(".generate-password");
const msgOutput = document.querySelector(".message");
const passwordOutput = document.querySelector(".password-output");
const symbolsInput = document.querySelector(".symbol-input");
const symbolsIcon = document.querySelector(".symbols-icon");
const copyBtn = document.querySelector(".copy-icon");

passwordLengthInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    displayPassword();
    e.preventDefault();
  }
});

createPasswordButton.addEventListener("click", (e) => {
  displayPassword();
});

symbolsInput.addEventListener("click", () => {
  symbols = !symbols;
  console.log(symbols);
  symbolsIcon.classList.toggle("hidden");
});

// Copy password to clipboard

copyBtn.addEventListener("click", () => {
  if (passwordOutput.textContent === "Awaiting for Password...") {
    msgOutput.textContent = "Please generate a valid password";
    msgOutput.classList.remove("hidden");
  } else {
    copyContent();
  }
});
