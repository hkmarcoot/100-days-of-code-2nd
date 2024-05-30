/* *****************functions.js******************* */
function numToEng(num) {
  var str = num.toString();
  if (num === 0) return "zero";
  if (str.length === 1) {
    return lastDigitFunc(num);
  }
  if (str.length === 2) {
    return secondLastDigitFunc(str);
  }
  if (str.length === 3) {
    return firstDigitFunc(str) + " " + secondLastDigitFunc(str.slice(1));
  }
}

function lastDigitFunc(num) {
  if (num === 1) return "one";
  if (num === 2) return "two";
  if (num === 3) return "three";
  if (num === 4) return "four";
  if (num === 5) return "five";
  if (num === 6) return "six";
  if (num === 7) return "seven";
  if (num === 8) return "eight";
  if (num === 9) return "nine";
}

function secondLastDigitFunc(str) {
  var lastDigit = "";
  var secondLastDigit = "";
  if (parseInt(str[0]) === 0) {
    return lastDigitFunc(parseInt(str[1]));
  }
  if (parseInt(str[0]) === 1) {
    if (parseInt(str[1]) === 0) {
      return "ten";
    } else if (parseInt(str[1]) === 1) {
      return "eleven";
    } else if (parseInt(str[1]) === 2) {
      return "twelve";
    } else if (parseInt(str[1]) === 3) {
      return "thirteen";
    } else if (parseInt(str[1]) === 4) {
      return "fourteen";
    } else if (parseInt(str[1]) === 5) {
      return "fifteen";
    } else if (parseInt(str[1]) === 6) {
      return "sixteen";
    } else if (parseInt(str[1]) === 7) {
      return "seventeen";
    } else if (parseInt(str[1]) === 8) {
      return "eighteen";
    } else if (parseInt(str[1]) === 9) {
      return "nineteen";
    }
  } else if (parseInt(str[0]) >= 2) {
    if (parseInt(str[0]) === 2) {
      secondLastDigit = "twenty";
    } else if (parseInt(str[0]) === 3) {
      secondLastDigit = "thirty";
    } else if (parseInt(str[0]) === 4) {
      secondLastDigit = "forty";
    } else if (parseInt(str[0]) === 5) {
      secondLastDigit = "fifty";
    } else if (parseInt(str[0]) === 6) {
      secondLastDigit = "sixty";
    } else if (parseInt(str[0]) === 7) {
      secondLastDigit = "seventy";
    } else if (parseInt(str[0]) === 8) {
      secondLastDigit = "eighty";
    } else if (parseInt(str[0]) === 9) {
      secondLastDigit = "ninety";
    }
    lastDigit = lastDigitFunc(parseInt(str[1]));
    return secondLastDigit + " " + lastDigit;
  }
}

function firstDigitFunc(str) {
  return lastDigitFunc(parseInt(str[0])) + " " + "hundred";
}
module.exports = numToEng;

/* Given Helpful Links
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/
