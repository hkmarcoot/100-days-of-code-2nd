const recursiveFactorial = (n) => {
  if (n >= 1) {
    console.log(`Execution context: ${n}`);

    recursiveFactorial(n - 1);
  }
};

const recursiveSolution = recursiveFactorial(4);
console.log(recursiveSolution);

module.exports = {
  recursiveFactorial,
};
