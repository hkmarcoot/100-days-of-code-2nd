/* **********************functions.js*************************** */
function maxItems(a, b) {
  var arr = a.map((x) => parseInt(x.slice(1))).sort((a, b) => a - b);
  var money = parseInt(b.slice(1));
  var count = 0;
  if (money - arr[0] < 0) return "Not enough funds!";
  for (var i = 0; i < arr.length; i++) {
    money = money - arr[i];
    if (money < 0) return count;
    count++;
  }

  return count;
}
module.exports = maxItems;

/* Given Helpful Links
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   Array.prototype.forEach()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */
