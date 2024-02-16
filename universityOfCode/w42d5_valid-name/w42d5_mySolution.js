function validName(str) {
  if (!str.includes(" ")) {
    return "error: 0. Name must be 2 or 3 words";
    // return false;
  }
  var arr = str.split(" ");
  if (arr.length > 3) {
    return "error: 0. Name must be 2 or 3 words";
    // return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][0].toLowerCase()) {
      return "error: 1. Incorrect Capitalization";

      // return false;
    }
    if ((arr[i].length === 2 && arr[i][1] !== ".") || arr[i].length === 1) {
      return "error: 2. Missing dot after initial";

      // return false;
    }
    if (arr[i].length > 2 && arr[i][arr[i].length - 1] === ".") {
      return "error: 3. Words cannot end with a dot (only initials can)";

      // return false;
    }
  }
  if (arr.length === 3) {
    if (arr[0].length === 2 && arr[0][1] === "." && arr[1].length > 2) {
      return "error: 4. Cannot have: initial first name + word middle name";

      // return false;
    }
    if (arr[2].length === 2 && arr[2][1] === ".") {
      return "error: 5. Last name cannot be initial";

      // return false;
    }
  } else if (arr.length === 2) {
    if (arr[0].length === 2 && arr[0][1] === "." && !(arr[1].length > 2)) {
      return "error: 6. invalid initial and last name format";

      // return false;
    }
  }
  return true;
}

console.log(validName("H. Wells"));
console.log(validName("H. G. Wells"));
console.log(validName("Herbert G. Wells"));
console.log(validName("Herbert George Wells"));
console.log(validName("Herbert"));
console.log(validName("Herbert W. G. Wells"));
console.log(validName("h. Wells"));
console.log(validName("herbert G. Wells"));
console.log(validName("H Wells"));
console.log(validName("Herb. Wells"));
console.log(validName("H. George Wells"));
console.log(validName("Herbert George W."));

/* Given Helpful Links
   RegExp.prototype.test()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   String.prototype.endsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
   Online RegEx Tester and Debugger
     - https://regex101.com
  */
