function larger(num) {
  return num >= parseInt(num.toString().split("").reverse().join(""));
}
