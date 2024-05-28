/* ******************functions.js******************* */
function areaOfCountry(name, area) {
  var precentage = ((area / 148940000) * 100).toFixed(2);
  return `${name} is ${precentage}% of the total world's landmass`;
}
module.exports = areaOfCountry;

/* Given Helpful Links
   Template literals (Template strings)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   Number.prototype.toFixed()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
   parseFloat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
*/
