// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { addLength } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Basic tests", () => {
  const testCases = [
    ["apple ban", ["apple 5", "ban 3"]],
    ["you will win", ["you 3", "will 4", "win 3"]],
    ["you", ["you 3"]],
    ["y", ["y 1"]],
    ["x y z", ["x 1", "y 1", "z 1"]],
    ["xyz", ["xyz 3"]],
    ["xyz x y z xyz", ["xyz 3", "x 1", "y 1", "z 1", "xyz 3"]],
    ["a bc cde", ["a 1", "bc 2", "cde 3"]],
    ["a ab abc", ["a 1", "ab 2", "abc 3"]],
    ["a ab abc ab a", ["a 1", "ab 2", "abc 3", "ab 2", "a 1"]],
  ];
  for (const [input, expected] of testCases) {
    it(`Testing for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(addLength(input), expected);
    });
  }
});

describe("Random tests", () => {
  const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
  const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const addSol = (str) => str.split(" ").map((a) => `${a} ${a.length}`);

  for (let i = 0; i < 40; i++) {
    const s = [];
    const len = randint(1, 60);
    for (let j = 0; j < len; j++) {
      s.push(base[randint(0, base.length - 1)]);
    }
    const input = s
      .join("")
      .trim()
      .replace(/\s{2,100}/g, " ");
    const expected = addSol(input);
    it(`Testing for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(addLength(input), expected);
    });
  }
});
