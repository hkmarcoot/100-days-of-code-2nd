/* *******************functions.js***************** */
function firstRepeat2(str) {
  var countArr = [];
  var lowerCase = str.toString();
  var arr = lowerCase.split("");
  for (let i = 0; i < arr.length; i++) {
    if (countArr.includes(arr[i])) {
      return arr[i];
    } else {
      countArr.push(arr[i]);
    }
  }
  return -1;
}

function firstRepeat(str) {
  var countArr = [];
  var result = "";
  var lowerCase = str.toString();
  var arr = lowerCase.split("");
  arr.every((x, index) => {
    if (countArr.includes(arr[index])) {
      result = arr[index];
      return false;
    } else {
      countArr.push(arr[index]);
      return true;
    }
  });
  return result ? result : -1;
}

module.exports = firstRepeat;

// Reference
// https://masteringjs.io/tutorials/fundamentals/foreach-break

/* Given Helpful Links
   String.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
   String.prototype.lastIndexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
   Array.prototype.find()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   Bitwise Operators
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
   Finding Duplicate Characters in a String in JavaScript
     - https://medium.com/@caymanbruce/finding-duplicate-characters-in-a-string-in-javascript-94e2cb23ab5e
  */
