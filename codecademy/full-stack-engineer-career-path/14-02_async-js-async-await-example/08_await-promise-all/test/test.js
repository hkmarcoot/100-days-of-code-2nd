console.log = function () {};
const { expect } = require("chai");
const rewire = require("rewire");
var sinon = require("sinon");
let logs = [];
const fs = require("fs");
const code = fs.readFileSync("app.js", "utf8");

describe("", function () {
  it("", async function () {
    try {
      var appModule = rewire("../app.js");
    } catch (e) {
      expect(
        true,
        "Double check your code. It likely has a syntax error."
      ).to.equal(false);
    }
    let serveDinnerAgain;
    try {
      serveDinnerAgain = appModule.__get__("serveDinnerAgain");
    } catch (e) {
      expect(true, "Did you create `serveDinnerAgain`?").to.equal(false);
    }

    expect(
      serveDinnerAgain,
      "`serveDinnerAgain()` should be a function. Make sure to use the `async` keyword"
    ).to.be.an.instanceOf(Function);

    var promiseAllSpy = sinon.spy(Promise, "all");

    appModule.__set__("cookBeans", () => {
      return new Promise((resolve, reject) => {
        logs.push("1");
        resolve("first");
      });
    });

    appModule.__set__("steamBroccoli", () => {
      return new Promise((resolve, reject) => {
        logs.push("2");
        resolve("second");
      });
    });

    appModule.__set__("cookRice", () => {
      return new Promise((resolve, reject) => {
        logs.push("3");
        resolve("third");
      });
    });

    appModule.__set__("bakeChicken", () => {
      return new Promise((resolve, reject) => {
        logs.push("4");
        resolve("fourth");
      });
    });

    let consLog = [];
    console.log = (param) => consLog.push(param);

    let testValue = serveDinnerAgain();
    expect(
      testValue,
      "Your `serveDinnerAgain()` function needs to be an `async` function. Make sure you've included the keyword `async`"
    ).to.be.an.instanceOf(Object);

    await serveDinnerAgain();

    expect(
      promiseAllSpy.called,
      "Your function should call `Promise.all()`"
    ).to.equal(true);

    let expectedLogs = ["1", "2", "3", "4"];
    let areAllLogs = expectedLogs.every((item) => logs.includes(item));
    if (areAllLogs) {
      let codeTests = [
        /await *cookBeans *\( *\)/,
        /await *steamBroccoli *\( *\)/,
        /await *cookRice *\( *\)/,
        /await *bakeChicken *\( *\)/,
      ];
      let areAnyRegex = codeTests.some((item) => item.test(code));
      if (areAnyRegex) {
        expect(
          true,
          "Don't directly `await` any of the functions. We want to take advantage of concurrency by invoking the functions without initially `await`-ing them."
        ).to.equal(false);
      } else {
        //check logs
        expect(
          consLog.includes(
            `Dinner is served. We're having second, third, fourth, and first.`
          ),
          "You'll need to use string interpolation and the values from the array returned from `await`-ing `Promise.all()` to construct the string in the exact format expected. Check your spelling and punctuation. And see the hint for more help."
        ).to.equal(true);
      }
    } else {
      expect(
        true,
        "Your `async` function, `serveDinnerAgain()` should invoke each of the promise-returning functions."
      ).to.equal(false);
    }
  });
});
