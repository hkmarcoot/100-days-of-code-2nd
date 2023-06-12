function potatoCount(str) {
  let arr = str.split("");
  let newStr = "";
  let count = 0;
  for (let i = 0; i < str.length - 5; i++) {
    newStr = arr[i].concat(
      arr[i + 1],
      arr[i + 2],
      arr[i + 3],
      arr[i + 4],
      arr[i + 5]
    );
    if (newStr === "potato") {
      count++;
      i = i + 5;
    }
  }
  return count;
}
