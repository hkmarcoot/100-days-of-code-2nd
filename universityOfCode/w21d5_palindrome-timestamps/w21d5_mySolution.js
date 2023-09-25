function palindromeTimestamps(
  firsthr,
  firstmin,
  firstsec,
  secondhr,
  secondmin,
  secondsec
) {
  var count = 0;
  if (firsthr === secondhr && firstmin === secondmin) {
    for (let k = firstsec; k <= secondsec; k++) {
      if (checkPalindrome(firsthr, firstmin, k)) {
        count++;
      }
    }
  } else if (firsthr === secondhr) {
    for (let j = firstmin; j <= secondmin; j++) {
      if (j === firstmin) {
        for (let k = firstsec; k < 60; k++) {
          if (checkPalindrome(firsthr, j, k)) {
            count++;
          }
        }
      } else if (j === secondmin) {
        for (let k = 0; k <= secondsec; k++) {
          if (checkPalindrome(firsthr, j, k)) {
            count++;
          }
        }
      } else {
        for (let k = 0; k < 60; k++) {
          if (checkPalindrome(firsthr, j, k)) {
            count++;
          }
        }
      }
    }
  } else {
    for (let i = firsthr; i <= secondhr; i++) {
      if (i === secondhr) {
        for (let j = 0; j <= secondmin; j++) {
          if (j === secondmin) {
            for (let k = 0; k <= secondsec; k++) {
              if (checkPalindrome(i, j, k)) {
                count++;
              }
            }
          } else {
            for (let k = 0; k < 60; k++) {
              if (checkPalindrome(i, j, k)) {
                count++;
              }
            }
          }
        }
      } else if (i === firsthr) {
        for (let j = firstmin; j < 60; j++) {
          if (j === firstmin) {
            for (let k = firstsec; k < 60; k++) {
              if (checkPalindrome(i, j, k)) {
                count++;
              }
            }
          } else {
            for (let k = 0; k < 60; k++) {
              if (checkPalindrome(i, j, k)) {
                count++;
              }
            }
          }
        }
      } else {
        for (let j = 0; j < 60; j++) {
          for (let k = 0; k < 60; k++) {
            if (checkPalindrome(i, j, k)) {
              count++;
            }
          }
        }
      }
    }
  }
  return count;
}

function checkPalindrome(hr, min, sec) {
  var hrStr = "";
  var minStr = "";
  var secStr = "";
  if (hr < 10) {
    hrStr = "0" + hr.toString();
  } else {
    hrStr = hr.toString();
  }
  if (min < 10) {
    minStr = "0" + min.toString();
  } else {
    minStr = min.toString();
  }
  if (sec < 10) {
    secStr = "0" + sec.toString();
  } else {
    secStr = sec.toString();
  }

  if (
    hrStr.split("").reverse().join("") === secStr &&
    minStr.split("").reverse().join("") === minStr
  ) {
    // console.log(hrStr+ " " + minStr + " " + secStr);
    return true;
  } else {
    return false;
  }
}

// console.log(checkPalindrome(2, 11,20));
console.log(palindromeTimestamps(2, 12, 22, 4, 35, 10));
console.log(palindromeTimestamps(12, 12, 12, 13, 13, 13));
console.log(palindromeTimestamps(6, 33, 15, 9, 55, 10));
console.log(palindromeTimestamps(11, 00, 11, 11, 00, 11));
console.log(palindromeTimestamps(10, 22, 01, 12, 22, 21));

/* Given Helpful Links
 Palindromic Number
   - https://en.wikipedia.org/wiki/Palindromic_number#:~:text=A%20palindromic%20number%20(also%20known,when%20its%20digits%20are%20reversed.
*/
