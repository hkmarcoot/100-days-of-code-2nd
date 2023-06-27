function convertor(str) {
  var tempStr = "";
  var tempArr = str.split(" ");

  for (var i = 0; i < tempArr.length; i++) {
    if (tempArr[i].toLowerCase() === "zero") {
      tempStr = tempStr.concat("0");
    } else if (tempArr[i].toLowerCase() === "one") {
      tempStr = tempStr.concat("1");
    } else {
      // Ignore it
    }
  }

  if (tempStr.length >= 8) {
    do {
      if (tempStr.length % 8 === 0) {
        return tempStr;
      } else {
        tempStr = tempStr.slice(0, -1);
      }
    } while (tempStr.length >= 8);
  } else {
    return "";
  }
}

console.log(convertor("one one one one zero zero zero zero"));
console.log(convertor("one zero one"));
console.log(convertor("one zero zero one zer oten one one one one two"));
console.log(convertor("TWO one zero one one zero one zero"));
console.log(convertor("TWO one zero one one zero one zero one"));
console.log("------");
console.log(convertor("zero one zero one zero one zero one"));
console.log(convertor("Zero one zero ONE zero one zero one"));
console.log(convertor("zero one zero one zero one zero one one two"));
console.log(convertor("zero one zero one zero one zer o three"));
console.log(convertor("one one"));

/* Given Helpful Links
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 String.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
*/
