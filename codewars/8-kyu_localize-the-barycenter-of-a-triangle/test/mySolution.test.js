// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { barTriang } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Basic Tests", () => {
  it("Basic Tests", () => {
    assert.deepEqual(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
    assert.deepEqual(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
    assert.deepEqual(barTriang([4, 8], [8, 2], [16, 6]), [9.3333, 5.3333]);
    assert.deepEqual(barTriang([0, 0], [1, 3], [-1, 6]), [0, 3]);
    assert.deepEqual(barTriang([0, 0], [1, 6], [8, -6]), [3, 0]);
  });
});

describe("Random Cases", () => {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function barSol(p1, p2, p3) {
    return [
      Math.round(((p1[0] + p2[0] + p3[0]) / 3) * 10000) / 10000,
      Math.round(((p1[1] + p2[1] + p3[1]) / 3) * 10000) / 10000,
    ];
  }

  describe("Moderate Values", () => {
    for (let h = 0; h < 60; h++) {
      let min = 20,
        max = 50;
      let points = [
        [randint(min, max), randint(min, max)],
        [randint(min, max), randint(min, max)],
        [randint(min, max), randint(min, max)],
      ];
      it(`Testing for [${points.join("], [")}]`, () => {
        assert.deepEqual(
          barTriang.apply(this, points),
          barSol.apply(this, points),
          "It should work on random inputs too"
        );
      });
    }
  });

  describe("High Values", () => {
    for (let h = 0; h < 60; h++) {
      let min = 200,
        max = 1000;
      let points = [
        [randint(min, max), randint(min, max)],
        [randint(min, max), randint(min, max)],
        [randint(min, max), randint(min, max)],
      ];
      it(`Testing for [${points.join("], [")}]`, () => {
        assert.deepEqual(
          barTriang.apply(this, points),
          barSol.apply(this, points),
          "It should work on random inputs too"
        );
      });
    }
  });

  describe("Huge Values", () => {
    for (let h = 0; h < 60; h++) {
      let min = 2000,
        max = 10000;
      let points = [
        [randint(min, max), randint(min, max)],
        [randint(min, max), randint(min, max)],
        [randint(min, max), randint(min, max)],
      ];
      it(`Testing for [${points.join("], [")}]`, () => {
        assert.deepEqual(
          barTriang.apply(this, points),
          barSol.apply(this, points),
          "It should work on random inputs too"
        );
      });
    }
  });
});
