"use strict";

function convertToRoman(num) {
  let temp = num;
  let result = "";
  const ROMAN_NUMBERS = {
    "M": 1000, "CM": 900, "D": 500, "CD": 400,
    "C": 100, "XC": 90, "L": 50, "XL": 40,
    "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1
  };
  Object.keys(ROMAN_NUMBERS).forEach(key => {
    const qoutient = Math.floor(temp / ROMAN_NUMBERS[key]);
    temp -= ROMAN_NUMBERS[key] * qoutient;
    for (let i = 0; i < qoutient; i++) {
      result += key;
    }
  });
  return result;
}

console.log(convertToRoman(36));