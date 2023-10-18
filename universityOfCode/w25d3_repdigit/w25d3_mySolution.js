function isRepdigit(num) {
  if (num < 0) return false;
  var str = num.toString();
  for (var i = 0; i < str.length; i++) {
    if (str[0] !== str[i]) {
      return false;
    }
  }
  return true;
}

console.log(isRepdigit(66));
console.log(isRepdigit(0));
console.log(isRepdigit(-11));
console.log(isRepdigit(6666));
console.log(isRepdigit(1001));
