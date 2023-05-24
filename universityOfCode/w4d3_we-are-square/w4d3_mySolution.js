function squareAll(n) {
  return n
    .toString()
    .split("")
    .map((x) => Number(x * x))
    .join("");
}
