/**********************Code Starts Here*********************/
function cipher(str, num) {
  let alphabetASCII = 0;
  let newArray = [];

  if (num === 0) {
    num = 0;
  } else if (num % 26 === 0) {
    num = 26;
  } else {
    num = num % 26;
  }

  for (let i = 0; i < str.length; i++) {
    //Convert the alphabet into ASCII code, save it in alphabetASCII
    alphabetASCII = str[i].charCodeAt(0);

    //Check if it is a symbol or space
    if (
      (alphabetASCII >= 31 && alphabetASCII <= 64) ||
      (alphabetASCII >= 91 && alphabetASCII <= 96) ||
      (alphabetASCII >= 123 && alphabetASCII <= 127)
    ) {
      //Convert the ASCII code back to alphabet, and push it into newArray
      newArray.push(String.fromCharCode(alphabetASCII));
      alphabetASCII = 0;
    } else if (alphabetASCII >= 65 && alphabetASCII <= 90) {
      //Shifting each letter num letters down in alphabet
      alphabetASCII = alphabetASCII + num;
      if (alphabetASCII > 90) {
        alphabetASCII = alphabetASCII - 26;
      }
      newArray.push(String.fromCharCode(alphabetASCII));
      alphabetASCII = 0;
    } else if (alphabetASCII >= 97 && alphabetASCII <= 122) {
      //Shifting each letter num letters down in alphabet
      alphabetASCII = alphabetASCII + num;
      if (alphabetASCII > 122) {
        alphabetASCII = alphabetASCII - 26;
      }
      newArray.push(String.fromCharCode(alphabetASCII));
      alphabetASCII = 0;
    }
  }
  return newArray.join("");
}

console.log(cipher("PAPAFAM-Rules", 2));
console.log(cipher("This-problem-is-hard", 10));
console.log(cipher("ZzZz", 28));
/*******************Code Ends********************************/

/* Given Helpful Links
 Caesar Cipher
   - https://www.dcode.fr/caesar-cipher
 Caesars Cipher
   - https://en.wikipedia.org/wiki/Caesar_cipher
 String.prototype.charCodeAt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 String.fromCharCode()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
*/
