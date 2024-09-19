// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { hotpo } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

let sol = function (n) {
  if (n == 0) return 0;

  let i = 0;
  while (n != 1) {
    if (n % 2 == 0) n /= 2;
    else n = 3 * n + 1;

    i++;
  }
  return i;
};

describe("Collatz Conjecture", function () {
  it("Fixed Tests", function () {
    assert.strictEqual(hotpo(1), 0);
    assert.strictEqual(hotpo(5), 5);
    assert.strictEqual(hotpo(6), 8);
    assert.strictEqual(hotpo(23), 15);
  });
  it("Random Tests", function () {
    for (let i = 0; i < 10; i++) {
      let rand_n = ~~(50 * Math.random());

      assert.strictEqual(hotpo(rand_n), sol(rand_n));
    }
  });
});
