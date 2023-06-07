function reversedString(str) {
  str = str.replace(/ +(?= )/g, "");
  return str.split(" ").reverse().join(" ");
}

// Reference:
// https://stackoverflow.com/questions/3286874/remove-all-multiple-spaces-in-javascript-and-replace-with-single-space
