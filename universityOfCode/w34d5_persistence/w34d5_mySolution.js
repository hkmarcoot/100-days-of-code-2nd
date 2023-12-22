function additivePersistence(num) {
  var str = num.toString();
  var count = 0;
  while (str.length != 1) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    str = sum.toString();
    count++;
  }
  return count;
}

function multiplicativePersistence(num) {
  var str = num.toString();
  var count = 0;
  while (str.length != 1) {
    var multiple = 1;
    for (var i = 0; i < str.length; i++) {
      multiple *= parseInt(str[i]);
    }
    str = multiple.toString();
    count++;
  }
  return count;
}

console.log(additivePersistence(5));
console.log(additivePersistence(27));
console.log(additivePersistence(58));
console.log(additivePersistence(5789));
console.log(multiplicativePersistence(7));
console.log(multiplicativePersistence(1234567890));
console.log(multiplicativePersistence(39));
console.log(multiplicativePersistence(6788));
console.log(multiplicativePersistence(277777788888899));

/* Given Helpful Links
 while
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Destructuring Assignment
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 eval()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 Array.prototype.join() 
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
