function plant(seed, water, fert, temp) {
  var result = "";
  for (i = 0; i < water; i++) {
    for (j = 0; j < water; j++) {
      result += "-";
    }
    if (temp >= 20 && temp <= 30) {
      for (k = 0; k < fert; k++) {
        result += seed;
      }
    }
  }
  if (temp < 20 || temp > 30) {
    result += seed;
  }
  return result;
}

console.log(plant("@", 3, 3, 25));
console.log(plant("#", 1, 5, 30));
console.log(plant("&", 5, 1, 20));
console.log(plant("f", 3, 3, 15));

/* Given Helpful Links
 String.prototype.repeat()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
*/
