const Test = require("@codewars/test-compat");

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Invert array values", () => {
  const norm = (arr) => arr.map((n) => (n === -0 ? 0 : n));
  it("Basic Tests", () => {
    assert.deepEqual(norm(invert([1, 2, 3, 4, 5])), [-1, -2, -3, -4, -5]);
    assert.deepEqual(norm(invert([1, -2, 3, -4, 5])), [-1, 2, -3, 4, -5]);
    assert.deepEqual(norm(invert([])), []);
    assert.deepEqual(norm(invert([0])), [0]);
  });

  it("Random Tests", function () {
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function sol(array) {
      return array.map((n) => -n);
    }

    function generateArr() {
      let arr = [],
        n = rand(5, 100);
      for (let i = 0; i < n; i++) {
        arr.push(rand(-100, 100));
      }
      return arr;
    }

    for (let i = 0; i < 100; i++) {
      let v = generateArr();
      assert.deepEqual(
        norm(invert(v.slice())),
        norm(sol(v)),
        `Testing for array = ${JSON.stringify(v)}`
      );
    }
  });
});
