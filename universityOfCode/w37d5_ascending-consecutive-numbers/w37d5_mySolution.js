function ascending(str) {
  var arr = [];
  for (var i = Math.floor(str.length / 2); i > 0; i--) {
    var re = new RegExp(`.{1,${i}}`, "g");
    // From reference: arr = str.match(/.{1,3}/g);
    arr = str.match(re);
    var checkingArr = [];
    for (var j = 0; j < arr.length - 1; j++) {
      if (parseInt(arr[j]) + 1 === parseInt(arr[j + 1])) {
        checkingArr.push(true);
      } else {
        checkingArr.push(false);
      }
    }
    if (checkingArr.every((x) => x === true)) {
      return true;
    }
  }
  return false;
}

console.log(ascending("232425"));
console.log(ascending("444445"));
console.log(ascending("1234567"));
console.log(ascending("123412351236"));
console.log(ascending("57585960616263"));
console.log(ascending("500001500002500003"));
console.log(ascending("919920921"));

console.log(ascending("2324256"));
console.log(ascending("1235"));
console.log(ascending("121316"));
console.log(ascending("12131213"));
console.log(ascending("54321"));
console.log(ascending("56555453"));
console.log(ascending("90090190290"));
console.log(ascending("35236237238"));

// Reference
// https://stackoverflow.com/questions/6259515/how-can-i-split-a-string-into-segments-of-n-characters
// https://medium.com/@remoteupskill/how-to-write-dynamic-regex-in-javascript-f102e089debb

/* Given Helpful Links
   Array.prototype.every()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  */
