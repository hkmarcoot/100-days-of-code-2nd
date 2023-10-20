function convertToRoman(num) {
  var thousands = {
    1: "M",
    2: "MM",
    3: "MMM",
  };
  var hundreds = {
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
  };
  var tens = {
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
  };
  var units = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  };
  var arr = [];
  var numstr = num.toString();
  for (var i = 0; i < numstr.length; i++) {
    if (i === 0) {
      arr.push(units[parseInt(numstr[numstr.length - 1 - i])]);
    } else if (i === 1) {
      arr.push(tens[parseInt(numstr[numstr.length - 1 - i])]);
    } else if (i === 2) {
      arr.push(hundreds[parseInt(numstr[numstr.length - 1 - i])]);
    } else if (i === 3) {
      arr.push(thousands[parseInt(numstr[numstr.length - 1 - i])]);
    }
  }
  return arr.reverse().join("");
}

console.log(convertToRoman(12));
console.log(convertToRoman(798));
console.log(convertToRoman(3999));
console.log(convertToRoman(649));

/* Given Helpful Links
 Roman Numerals 1
   - https://en.wikipedia.org/wiki/Roman_numerals
 Roman Numerals 2
   - https://mathworld.wolfram.com/RomanNumerals.html
*/
