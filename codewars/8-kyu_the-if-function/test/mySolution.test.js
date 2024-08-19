// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { _if } from "../src/mySolution.js";

describe("Tests", () => {
  const unexpectedTrue = () =>
    assert.fail("'true' function unexpectedly called");
  const unexpectedFalse = () =>
    assert.fail("'false' function unexpectedly called");

  it("test literal true", () => {
    let testvar = 0;
    _if(true, () => (testvar = 42), unexpectedFalse);
    assert.strictEqual(testvar, 42, "'true' function has not been called");
  });
  it("test literal false", () => {
    let testvar = 0;
    _if(false, unexpectedTrue, () => (testvar = 42));
    assert.strictEqual(testvar, 42, "'false' function has not been called");
  });
  it("test falsy", () => {
    let testvar = 0;
    _if(null, unexpectedTrue, () => (testvar = 42));
    assert.strictEqual(testvar, 42, "'false' function has not been called");
  });
  it("test truthy", () => {
    let testvar = 0;
    _if(1, () => (testvar = 42), unexpectedFalse);
    assert.strictEqual(testvar, 42, "'true' function has not been called");
  });
  it("test true expression", () => {
    let testvar = 0;
    _if(3 < 4, () => (testvar = 42), unexpectedFalse);
    assert.strictEqual(testvar, 42, "'true' function has not been called");
  });
  it("test false expression", () => {
    let testvar = 0;
    _if(9 % 3 == 1, unexpectedTrue, () => (testvar = 42));
    assert.strictEqual(testvar, 42, "'false' function has not been called");
  });
});
