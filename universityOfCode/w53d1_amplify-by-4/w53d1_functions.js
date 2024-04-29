/* ****************functions.js****************** */
function amplify(num) {
  var result = [];
  for (var i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      result.push(i * 10);
    } else {
      result.push(i);
    }
  }
  return result;
}
module.exports = amplify;

/* Given Helpful Links
   For Loop
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   Array.from() and Array.keys()
     - https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.push()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   Array.prototype.fill()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
  */
