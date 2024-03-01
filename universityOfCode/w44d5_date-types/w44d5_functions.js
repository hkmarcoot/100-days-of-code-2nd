/* ***********************functions.js************************ */
function dateChange(str) {
  // Replace dd/mm/yy to dd/mm/yyyy for year ending with 24 or less
  function replacer01(match, p1, p2, p3, p4, offset, string) {
    return [p1, p2, p3, p2, "20", p4].join("");
  }
  str = str.replace(/(\d\d)(\/|\.)(\d\d)\2(2[0-4]|[0-1]\d)/g, replacer01);

  // Replace dd/mm/yy to dd/mm/yyyy for year ending with 25 or more
  function replacer02(match, p1, p2, p3, p4, offset, string) {
    return [p1, p2, p3, p2, "19", p4].join("");
  }
  str = str.replace(/(\d\d)(\/|\.)(\d\d)\2(2[5-9]|[3-9]\d)/g, replacer02);

  // Note: yy 24 or less is checked first, then yy 25 or more because it has error with 1998 -> 201998.

  // Replace month, dd. yy to month, dd. yyyy for year ending with 24 or less
  function replace03(match, p1, p2, p3, p4, p5, offset, string) {
    return [p1, p2, p3, p4, "20", p5].join("");
  }

  str = str.replace(
    /(January|February|March|April|May|June|July|August|September|October|November|December)(, )(\d\d)(. )(2[0-4]|[0-1]\d)/g,
    replace03
  );

  // Replace month, dd. yy to month, dd. yyyy for year ending with 25 or more
  function replace04(match, p1, p2, p3, p4, p5, offset, string) {
    return [p1, p2, p3, p4, "19", p5].join("");
  }

  str = str.replace(
    /(January|February|March|April|May|June|July|August|September|October|November|December)(, )(\d\d)(. )(2[5-9]|[3-9]\d)/g,
    replace04
  );

  return str;
}
module.exports = dateChange;

// Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://stackoverflow.com/questions/33195709/match-all-numbers-greater-than-36-using-regex
// https://stackoverflow.com/questions/21448139/match-list-of-words-without-the-list-of-chars-around

/* Given Helpful Links
   Match DD/MM/YY
     - https://regex101.com/r/8bYMma/1
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  */
