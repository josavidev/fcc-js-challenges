"use strict";

function palindrome(str) {
  const ALPHANUM = {
    "a": "", "b": "", "c": "", "d": "", "e": "", "f": "",
    "g": "", "h": "", "i": "", "j": "", "k": "", "l": "",
    "m": "", "n": "", "o": "", "p": "", "q": "", "r": "",
    "s": "", "t": "", "u": "", "v": "", "w": "", "x": "",
    "y": "", "z": "", "0": "", "1": "", "2": "", "3": "",
    "4": "", "5": "", "6": "", "7": "", "8": "", "9": ""
  };
  const lowerList = str.toLowerCase().split("");
  const filtered = lowerList.filter(chr => chr in ALPHANUM);
  const checkStr = filtered.join("");
  const splitIndex = Math.round(checkStr.length / 2);
  const part1 = checkStr.slice(0, checkStr.length % 2 === 0
    ? splitIndex : splitIndex - 1);
  let part2 = checkStr.slice(splitIndex);
  part2 = part2.split("").reduce((prev, chr) => chr + prev, "");
  return part1 === part2;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));