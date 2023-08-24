function uncensor(str1, str2) {
  var j = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "*") {
      str1 = str1.slice(0, i) + str2[j] + str1.slice(i + 1);
      j++;
    }
  }
  return str1;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));

/* Given Helpful Links
 Array.prototype.shift()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
