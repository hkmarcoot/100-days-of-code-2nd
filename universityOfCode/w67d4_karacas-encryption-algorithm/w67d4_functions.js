function encrypt(str) {
  str = str.split("").reverse().join("");
  str = str.replace(/a/g, "0");
  str = str.replace(/e/g, "1");
  str = str.replace(/i/g, "2");
  str = str.replace(/o/g, "2");
  str = str.replace(/u/g, "3");
  return str + "aca";
}
module.exports = encrypt;

// Reference
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// https://www.w3schools.com/jsref/jsref_replace.asp
