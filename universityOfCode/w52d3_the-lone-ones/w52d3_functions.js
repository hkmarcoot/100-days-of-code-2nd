/* *****************functions.js******************** */
function countLoneOnes(num) {
  var str = num.toString();
  var result = 0;
  if (str.length === 1 && str[0] === "1") return 1;
  if (
    str.length === 2 &&
    ((str[0] === "1" && str[1] != "1") || (str[0] != "1" && str[1] === "1"))
  )
    return 1;
  // First number checking
  if (str[0] === "1" && str[1] != "1") {
    result++;
  }
  // Middle numbers checking
  for (var i = 1; i <= str.length - 2; i++) {
    if (str[i - 1] != "1" && str[i] === "1" && str[i + 1] != "1") {
      result++;
    }
  }
  // Last number checking
  if (str[str.length - 2] != "1" && str[str.length - 1] === "1") {
    result++;
  }
  return result;
}

module.exports = countLoneOnes;

/* Given Helpful Links
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  */
