const recursiveFactorial = (n) => {
  if (n > 0) {
    console.log(`Execution context: ${n}`);

    return n * recursiveFactorial(n - 1);
  }
};

const recursiveSolution = recursiveFactorial(4);
console.log(recursiveSolution);

module.exports = {
  recursiveFactorial,
};
