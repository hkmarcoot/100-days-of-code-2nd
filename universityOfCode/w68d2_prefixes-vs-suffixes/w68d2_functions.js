exports.isPrefix = function (word, prefix) {
  return (
    word.substring(0, prefix.length - 1) ===
    prefix.substring(0, prefix.length - 1)
  );
};

exports.isSuffix = function (word, suffix) {
  return (
    word.substring(word.length - suffix.length + 1) === suffix.substring(1)
  );
};

// Reference
// https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js

/* Given Helpful Links
   String.prototype.endsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
   String.prototype.startsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
   String.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
   String.prototype.substring()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
