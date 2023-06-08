function hackerSpeak(str) {
  return str
    .split("")
    .map(function (x) {
      if (x === "a") {
        return (x = "4");
      } else if (x === "e") {
        return (x = "3");
      } else if (x === "i") {
        return (x = "1");
      } else if (x === "o") {
        return (x = "0");
      } else if (x === "s") {
        return (x = "5");
      } else {
        return (x = x);
      }
    })
    .join("");
}
