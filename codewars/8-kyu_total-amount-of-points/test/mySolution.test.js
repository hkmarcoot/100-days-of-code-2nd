// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { points } from "../src/mySolution.js";
// import pkg from "lodash";
// const { _ } = pkg;

describe("Total amount of points", function () {
  it("Fixed Tests", function () {
    assert.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
      ]),
      30
    );
    assert.strictEqual(
      points([
        "1:1",
        "2:2",
        "3:3",
        "4:4",
        "2:2",
        "3:3",
        "4:4",
        "3:3",
        "4:4",
        "4:4",
      ]),
      10
    );
    assert.strictEqual(
      points([
        "0:1",
        "0:2",
        "0:3",
        "0:4",
        "1:2",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      0
    );
    assert.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      15
    );
    assert.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:4",
        "2:2",
        "3:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      12
    );
  });

  it("Random tests", function () {
    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function pointsSolution(games) {
      return games.reduce(
        (a, b) => a + (b[0] > b[2] ? 3 : b[0] < b[2] ? 0 : 1),
        0
      );
    }

    let games = [];
    let g1, g2;
    for (let i = 0; i < 50; i++) {
      games = [];
      for (let j = 0; j < 10; j++) {
        g1 = randInt(0, 4);
        g2 = randInt(0, 4);
        games.push(g1.toString() + ":" + g2.toString());
      }
      let exp = pointsSolution(games.slice());
      assert.strictEqual(
        points(games),
        exp,
        `Testing for points = ${JSON.stringify(games)}`
      );
    }
  });
});
