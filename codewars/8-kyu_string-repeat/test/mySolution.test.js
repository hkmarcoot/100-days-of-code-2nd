// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { repeatStr } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

const solution = (n, s) => Array.from({ length: n + 1 }).join(s);

function random(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function str_random(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

  // Loop to generate characters for the specified length
  for (let i = 0; i < length; i++) {
    const randomInd = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomInd);
  }
  return result;
}

// Reference
// https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework
// https://docs.codewars.com/languages/javascript/authoring/
// https://www.geeksforgeeks.org/generate-random-characters-numbers-in-javascript/

describe("Tests", function () {
  it("Basic tests", function () {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    assert.strictEqual(repeatStr(5, ">"), ">>>>>");
    assert.strictEqual(repeatStr(10, "!"), "!!!!!!!!!!");
    assert.strictEqual(repeatStr(3, "hello "), "hello hello hello ");
    assert.strictEqual(repeatStr(3, "$"), "$$$");
    assert.strictEqual(repeatStr(5, "a"), "aaaaa");
    assert.strictEqual(repeatStr(6, "A"), "AAAAAA");
    assert.strictEqual(repeatStr(7, "aA"), "aAaAaAaAaAaAaA");
  });
  it("Random tests", function () {
    for (let i = 0; i < 10; i++) {
      let num = random(0, 100);
      let s = str_random(9);
      assert.strictEqual(repeatStr(num, s), solution(num, s));
    }
  });
});
