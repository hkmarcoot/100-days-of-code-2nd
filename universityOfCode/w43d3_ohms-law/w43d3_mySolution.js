function ohmsLaw(v, r, i) {
  var count = 0;
  if (v === "") count++;
  if (r === "") count++;
  if (i === "") count++;
  if (count != 1) return "Invalid";
  if (v === "") {
    return r * i;
  } else if (r === "") {
    return (v / i).toFixed(2);
  } else if (i === "") {
    return (v / r).toFixed(2);
  }
}

console.log(ohmsLaw(12, 220, ""));
console.log(ohmsLaw(230, "", 2));
console.log(ohmsLaw("", "", 10));
console.log(ohmsLaw(500, 50, 10));

/* Given Helpful Links
   Math.round()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   Number.prototype.toFixed()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  */
